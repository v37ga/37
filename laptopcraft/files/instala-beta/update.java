import java.nio.file.*;
import javax.swing.JOptionPane;
import java.net.URI;



public class update {
    public static void main(String[] args) {
        
        //String path = System.getenv("APPDATA")+"\\.minecraft\\mods\\";
        //System.out.println(path);

        String[] arquivos = {
            "AdditionalEnchantedMiner-1.16.5-16.1.9.jar",
            "advanced-xray-forge-1.16.5-2.7.0.jar",
            "appliedenergistics2-8.4.3.jar",
            "architectury-1.24.35-forge.jar",
            "BasicNetherOres-1.16.5-5.5.0.jar",
            "BiomesOPlenty-1.16.5-13.1.0.477-universal (1).jar",
            "BrandonsCore-1.16.5-3.0.11.238-universal.jar",
            "Chisel-MC1.16.5-2.0.1-alpha.4.jar",
            "citadel-1.8.1-1.16.5.jar",
            "cloth-config-4.12.41-forge.jar",
            "Clumps-6.0.0.27.jar",
            "CodeChickenLib-1.16.5-4.0.3.434-universal.jar",
            "cofh_core-1.16.5-1.3.1.jar",
            "create-mc1.16.5_v0.3.2d.jar",
            "CTM-MC1.16.1-1.1.2.6.jar",
            "decorative_blocks-1.16.4-1.7.2.jar",
            "Draconic-Evolution-1.16.5-3.0.15.415-universal.jar",
            "DungeonsMod-1.16.3-1.4.40.jar",
            "EnderStorage-1.16.5-2.8.0.168-universal.jar",
            "ExtremeReactors2-1.16.5-2.0.31.jar",
            "FallingTree-1.16.5-2.11.5.jar",
            "FluxNetworks-1.16.5-6.1.7.12.jar",
            "flywheel-1.16-0.2.4.jar",
            "HammerLib-1.16.5-16.3.26.jar",
            "iceandfire-2.1.9-1.16.5.jar",
            "Industrial-Reborn-1.16.3-0.9.1.jar",
            "invtweaks-1.16.4-1.0.1.jar",
            "ironchest-1.16.5-11.2.13.jar",
            "ironfurnaces-1.16.5-2.7.4.jar",
            "itemcollectors-1.1.3-mc1.16.jar",
            "jei-1.16.5-7.7.1.134.jar",
            "light-overlay-5.8.1.jar",
            "Lucky-Block-Mod-1.16.5.jar",
            "Mekanism-1.16.5-10.0.21.448.jar",
            "MekanismAdditions-1.16.5-10.0.21.448.jar",
            "MekanismGenerators-1.16.5-10.0.21.448.jar",
            "MekanismTools-1.16.5-10.0.21.448.jar",
            "MouseTweaks-2.14-mc1.16.2.jar",
            "OptiFine-OptiFine-1.16.5_HD_U_G8_pre2.jar",
            "refinedpipes-0.5.2.jar",
            "ScalableCatsForce-2.13.5-build-2-with-library.jar",
            "silent-gear-1.16.5-2.6.30.jar",
            "silent-lib-1.16.3-4.9.6.jar",
            "SimplyJetpacks2-1.16.5-2.6.11.2.jar",
            "SolarFluxReborn-1.16.5-16.3.9.jar",
            "supermartijn642configlib-1.0.9-mc1.16.jar",
            "supermartijn642corelib-1.0.14-mc1.16.5.jar",
            "tesseract-1.0.24-mc1.16.jar",
            "thermal_cultivation-1.16.5-1.3.0.jar",
            "thermal_expansion-1.16.5-1.3.0.jar",
            "thermal_foundation-1.16.5-1.3.2.jar",
            "thermal_innovation-1.16.5-1.3.0.jar",
            "thermal_locomotion-1.16.5-1.3.0.jar",
            "tl_skin_cape_forge_1.16.5-1.19.jar",
            "toms_storage-1.2.19.jar",
            "transfer-chest-forge1.16-1.1.4.jar",
            "useful_backpacks-1.16.5-1.12.1.90.jar",
            "u_team_core-1.16.5-3.2.1.196.jar",
            "Xaeros_Minimap_21.21.0_Forge_1.16.5.jar",
            "ZeroCore2-1.16.5-2.1.4.jar",
            "Packing-Tape-Mod-1.16.5.jar",

        };
            
            Path path = null;

            
            
                for (int i = 0; i <= arquivos.length -1; i++){
                path = Paths.get(System.getenv("APPDATA")+"\\.minecraft\\mods\\"+arquivos[i]);
                if(Files.exists(path) && !Files.isDirectory(path)){
                    System.out.println(path+" -> "+i);
                }else{
                    System.out.println(path+" <--------------------------- ERRO x ERRO x ERRO x ERRO "+i);
                    JOptionPane.showMessageDialog(null,path);
                
                    if (arquivos[i].equals("Packing-Tape-Mod-1.16.5.jar")){
        
                        try {
                            URI uri = new URI("https://files2.9minecraft.net/index.php?act=dl&id=1614151255");
                            java.awt.Desktop.getDesktop().browse(uri);
                             System.out.println("Web page opened in browser");
                          
                           } catch (Exception e) {
                            
                            e.printStackTrace();
                           }
                        
                    }else if(arquivos[i].equals("FluxNetworks-1.16.5-6.2.1.14.jar")){
        
                        try {
                            URI uri = new URI("https://files2.9minecraft.net/index.php?act=dl&id=1614151255");
                            java.awt.Desktop.getDesktop().browse(uri);
                             System.out.println("Web page opened in browser");
                          
                           } catch (Exception e) {
                            
                            e.printStackTrace();
                           }
                    }

                }
            
        }   
    }
    
}