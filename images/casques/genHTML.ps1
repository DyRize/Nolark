$lesReps = Get-ChildItem -Path . –Directory
foreach ($unRep in $lesReps) {
    Write-Host '<section id="casques">'
    $cptLigne = 1;
    $lesFics = Get-ChildItem -Path $unRep
    $cptCasque = 0;
    foreach ($unFic in $lesFics) {
        if(($cptCasque % 5) -eq 0) {
            Write-Host "<!-- - - - - - - - - - - - - - LIGNE N°$cptLigne - - - - - - - - - - - - -->"
            $cptLigne++;
        }
        $altDesc = $unFic -replace "-"," " -replace ".jpg",""
        Write-Host "<img src=""../images/casques/$unRep/$unFic"" alt=""$altDesc"" />"
        $nbEnStock = Get-Random -Minimum -1 -Maximum 20
        if ($nbEnStock -eq -1) { 
            Write-Host "<p class=""stockko""><abbr data-tip=""Sur commande uniquement"">stock</abbr></p>"
        } elseif ($nbEnStock -ge 10) {
            Write-Host "<abbr data-tip=""$nbEnStock casques en stock"">stock</abbr>"
        } else {
            Write-Host "<abbr data-tip=""Plus que $nbEnStock casques en stock...""></abbr></p>"
        }
        $prix = [Math]::Round((Get-Random -Minimum 150.0 -Maximum 250.0),2)
        Write-Host "<p class=""prix"">$prix€</p>"
        Write-Host "<p class=""marque"">{{ casque.nom }}</p>
        Write-Host "<p class=""modele"">{{ casque.modele }}</p>
        $cptCasque++;
    }
}