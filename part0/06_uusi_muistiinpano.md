sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: Browser starts executing JS code that sends the note to server. After that the page is updated.
    activate server
    server-->>browser: JSON {"message":"note created"}
    deactivate server
