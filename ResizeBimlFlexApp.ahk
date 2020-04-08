;Windows Wrapper Size = 16 x 39

#Numpad0:: ; [Win]+[Num0] - Resize 1920x1080 (1080p)
    WinGet, window, ID, A
    WinMove, ahk_id %window%, , , , 1936, 1119
    return
#Numpad1:: ; [Win]+[Num1] - Resize 4:3 Small
    WinGet, window, ID, A
    WinMove, ahk_id %window%, , , , 656, 519
    return
#Numpad2:: ; [Win]+[Num2] - Resize 4:3 Medium
    WinGet, window, ID, A
    WinMove, ahk_id %window%, , , , 816, 639
    return
#Numpad3:: ; [Win]+[Num3] - Resize 4:3 Large
    WinGet, window, ID, A
    WinMove, ahk_id %window%, , , , 1040, 807
    return
#Numpad4:: ; [Win]+[Num4] - Resize 16:9 Small 1024x576 + Wrapper
    WinGet, window, ID, A
    WinMove, ahk_id %window%, , , , 1040, 615 ;1008x537 
    return
#Numpad5:: ; [Win]+[Num5] - Resize 16:9 Medium
    WinGet, window, ID, A
    WinMove, ahk_id %window%, , , , 1296, 720
    return
#Numpad6:: ; [Win]+[Num6] - Resize 16:9 Large
    WinGet, window, ID, A
    WinMove, ahk_id %window%, , , , 1616, 900
    return