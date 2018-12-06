@echo on
pushd %~dp0
set "source_folder=%~dp0"
set "result_folder_1=%~dp0\resize"

for %%a in ("*.png") do (
   call _script_resize.cmd -source "%%~fa" -target "resize\%%~nxa" -max-width 250 -keep-ratio yes -force yes
)