// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::sync::Mutex;
use tauri::{Manager, State};

#[derive(Clone, serde::Serialize)]
struct Payload {
    message: String,
}

struct Font {
    size: Mutex<i32>,
}

#[tauri::command]
fn get_font_size(state: State<Font>) -> i32 {
    let counter = state.size.lock().unwrap();
    *counter
}

#[tauri::command]
fn add_font_size(state: State<Font>) -> i32 {
    let mut counter = state.size.lock().unwrap();
    *counter = *counter + 1;

    *counter
}

#[tauri::command]
fn decrease_font_size(state: State<Font>) -> i32 {
    let mut counter = state.size.lock().unwrap();
    *counter = *counter - 1;

    *counter
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let id = app.listen_global("font_size_change", |_| {});
            app.unlisten(id);
            app.emit_all(
                "font_size_change",
                Payload {
                    message: "Font size changed!".into(),
                },
            )
            .unwrap();
            Ok(())
        })
        .manage(Font {
            size: Mutex::new(16),
        })
        .invoke_handler(tauri::generate_handler![
            get_font_size,
            add_font_size,
            decrease_font_size
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
