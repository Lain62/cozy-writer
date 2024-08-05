// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::sync::Mutex;
use tauri::State;

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

fn main() {
    tauri::Builder::default()
        .manage(Font {
            size: Mutex::new(16),
        })
        .invoke_handler(tauri::generate_handler![get_font_size, add_font_size])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
