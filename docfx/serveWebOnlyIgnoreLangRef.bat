REM - Delete docfx\_site, docfx\obj, docfx\api-reference folders before running
tools\jq-win64 ".metadata[0].src[0].exclude |= . + [\"**language-reference/**\"] | .build.content[2].exclude |= . + [\"**language-reference/**\"] | .build.content[3].exclude |= . + [\"**language-reference/**\"] | .build.resource[0].exclude |= . + [\"**language-reference/**\"]" docfxWebOnly.json > docfxWebOnlyIgnoreLangRef.json
tools\docfx build docfxWebOnlyIgnoreLangRef.json
del docfxWebOnlyIgnoreLangRef.json
tools\docfx serve _site
