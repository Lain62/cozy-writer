// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{AppHandle, Manager, WindowMenuEvent};
use tauri::{CustomMenuItem, Menu, Submenu};

#[derive(Clone, serde::Serialize)]
struct Payload {
    message: String,
}

#[tauri::command]
fn close_popup(app: AppHandle) {
    app.emit_all(
        "close_popup",
        Payload {
            message: "Closing popup".into(),
        },
    )
    .unwrap()
}

fn init_menu() -> Menu {
    let new_project = CustomMenuItem::new("new_project".to_string(), "New Project");
    let open_project = CustomMenuItem::new("open_project".to_string(), "Open Project");
    let font_settings = CustomMenuItem::new("font_settings".to_string(), "Font Settings");
    let file_submenu = Submenu::new(
        "File",
        Menu::new().add_item(new_project).add_item(open_project),
    );
    let settings_submenu = Submenu::new("Settings", Menu::new().add_item(font_settings));
    Menu::new()
        .add_submenu(file_submenu)
        .add_submenu(settings_submenu)
}

fn handle_menu_event(event: WindowMenuEvent) {
    match event.menu_item_id() {
        "font_settings" => event.window().emit_all(
            "open_font_window",
            Payload {
                message: "Opening font window".into(),
            },
        ),
        "new_project" => event.window().emit_all(
            "open_new_project_window",
            Payload {
                message: "Opening new project window".into(),
            },
        ),
        "open_project" => event.window().emit_all(
            "open_open_project_window",
            Payload {
                message: "Opening open project window".into(),
            },
        ),
        _ => event.window().emit_all(
            "nothing",
            Payload {
                message: "nothing".into(),
            },
        ),
    }
    .unwrap()
}

fn main() {
    let menu = init_menu();

    tauri::Builder::default()
        .menu(menu)
        .on_menu_event(|event| handle_menu_event(event))
        .invoke_handler(tauri::generate_handler![close_popup])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
