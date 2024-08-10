// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::sync::Mutex;
use tauri::{AppHandle, Manager, State, WindowMenuEvent};
use tauri::{CustomMenuItem, Menu, Submenu};

#[derive(Clone, serde::Serialize)]
struct Payload {
    message: String,
}

struct Font {
    size: Mutex<i32>,
}

#[tauri::command]
fn set_font_size(app: AppHandle, state: State<Font>, size: i32) {
    let mut counter = state.size.lock().unwrap();
    *counter = size;

    app.emit_all(
        "font_size_change",
        Payload {
            message: "Font size changed!".into(),
        },
    )
    .unwrap();
}

#[tauri::command]
fn close_new_project_window(app: AppHandle) {
    app.emit_all(
        "close_new_project_window",
        Payload {
            message: "Closing new project window".into(),
        },
    )
    .unwrap();
}

#[tauri::command]
fn close_font_window(app: AppHandle) {
    app.emit_all(
        "close_font_window",
        Payload {
            message: "Closing font window".into(),
        },
    )
    .unwrap();
}

#[tauri::command]
fn get_font_size(state: State<Font>) -> i32 {
    let counter = state.size.lock().unwrap();
    *counter
}

#[tauri::command]
fn add_font_size(state: State<Font>, app: AppHandle) -> i32 {
    let mut counter = state.size.lock().unwrap();
    *counter += 1;

    app.emit_all(
        "font_size_change",
        Payload {
            message: "Font size changed!".into(),
        },
    )
    .unwrap();
    *counter
}

#[tauri::command]
fn decrease_font_size(state: State<Font>, app: AppHandle) -> i32 {
    let mut counter = state.size.lock().unwrap();
    *counter -= 1;

    app.emit_all(
        "font_size_change",
        Payload {
            message: "Font size changed!".into(),
        },
    )
    .unwrap();
    *counter
}

fn init_menu() -> Menu {
    let open_project = CustomMenuItem::new("new_project".to_string(), "New Project");
    let font_settings = CustomMenuItem::new("font_settings".to_string(), "Font Settings");
    let file_submenu = Submenu::new("File", Menu::new().add_item(open_project));
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
        .manage(Font {
            size: Mutex::new(16),
        })
        .invoke_handler(tauri::generate_handler![
            get_font_size,
            add_font_size,
            decrease_font_size,
            close_font_window,
            set_font_size,
            close_new_project_window
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
