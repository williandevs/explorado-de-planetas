import { Injectable } from "@angular/core";
import { ChanceDeTerVidaPlanetaService } from "./chance-de-vida.service";
import { Planeta } from "./planeta";
import { TamanhoPlanetaService } from "./tamanho-planeta.service";

@Injectable ({
  providedIn: 'root'
})
export class PlanetaService  {
  private planetas: Planeta[] = [
    {
      nome: 'Mercurio',
      imagem: 'https://williamdev.com.br/wp-content/uploads/2022/07/mercurio-300x300.png',
      superficie: '74.800.000',
      diamentro: 4.879,
      distanciaSol: '58.000.000 ',
      satelite: 'Não tem Lua',
      rotacao: ' 58d 15h 30m',
      translacao: '88 dias',
      temperatura: 166,
      chanceDeVida: 'sim',
      populacao: "0",
      curiosidade: "  A velocidade de rotação de Mercúrio pode atingir 180 mil km/hora. Mesmo estando próximo do Sol, sondas espaciais encontraram gelo em Mercúrio",
      
    
    },

    {
      nome: 'Venus',
      imagem: 'https://williamdev.com.br/wp-content/uploads/2022/07/venus-300x300.png',
      superficie: '460.200.000',
      diamentro: 12.104,
      distanciaSol: '149.600.000 ',
      satelite: 'Vénus não possui satélites naturais',
      rotacao: ' - 243',
      translacao: '224 dias',
      temperatura: 461,
      chanceDeVida: 'sim',
      populacao: "0",
      curiosidade: " Devido às muitas semelhanças com nosso planeta, Vênus também é considerado um planeta irmão da Terra, mas apesar disso, ele tem características únicas e impressionantes.",
      
    
    },

    {
      nome: 'Terra',
      imagem: 'https://williamdev.com.br/wp-content/uploads/2022/07/terra-300x300.png',
      superficie: '510.072.000',
      diamentro: 12.742,
      distanciaSol: '149.600.000 ',
      satelite: 'Lua',
      rotacao: '23 horas 56 minutos',
      translacao: '365 dias 5 horas e 48 minutos',
      temperatura: 14,
      chanceDeVida: 'sim',
      populacao: " 7.722.522.000",
      curiosidade: " Cerca de 70% da superfície do planeta é coberta por água em estado líquido, elemento essencial para a existência de formas de vida",
      
    
    },
    
    {
      nome: 'Marte',
      imagem: 'https://williamdev.com.br/wp-content/uploads/2022/07/marte-300x300.png',
      superficie: '144.800.000',
      diamentro: 6.779,
      distanciaSol: '	227.940.000 ',
      satelite: 'Fobos e Deimos',
      rotacao: '24 h 37 min 22 s',
      translacao: '1,025 957 dias',
      temperatura: -63,
      chanceDeVida: 'sim',
      populacao: " Marcianos",
      curiosidade: " Existe água em Marte! Mas a atmosfera do planeta vermelho é muito pouco densa, e a água não se mantém durante muito tempo à superfície."
      
    
    },
    {
      nome: 'Júpiter',
      imagem:  'https://williamdev.com.br/wp-content/uploads/2022/07/jupeter-300x300.png',
      superficie: '0d 9h 56m',
      diamentro: 139.820,
      distanciaSol: ' 778.500.000',
      satelite: '60 Luas',
      rotacao: ' 10 hora',
      translacao: '11,86 anos terrestres',
      temperatura:  3632,
      chanceDeVida: 'sim',
      populacao: " 0",
      curiosidade: " O dia em Júpiter tem 10 horas de duração. Europa, uma das Luas Galileanas, pode ter um oceano líquido em sua superfície. Ventos de 600 km/hora são comuns em Júpiter. A diametro de Júpiter é 2,5 vezes maior do que os outros sete planetas do Sistema Solar juntos.."
      
    
    },
    {
      nome: 'Saturno',
      imagem:  'https://williamdev.com.br/wp-content/uploads/2022/07/saturno--300x300.png',
      superficie: ' 4,27 × 10^10',
      diamentro: 116.460,
      distanciaSol: ' 1,434 × 10^9',
      satelite: '82 Luas',
      rotacao: '10 horas e 39 minutos',
      translacao: '29 anos, 167 dias e 6 horas terrestres',
      temperatura: -138,
      chanceDeVida: 'sim',
      populacao: " 0",
      curiosidade: " Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 diamentros terrestres e orbita a uma distância média de 9,5 unidades astronômicas."
      
    
    },
    {
      nome: 'Urano',
      imagem:  'https://williamdev.com.br/wp-content/uploads/2022/07/urano-300x300.png',
      superficie: '8,083 × 10^9 km²',
      diamentro: 50.724,
      distanciaSol: ' 2,871 × 10^9 ',
      satelite: 'Miranda, Ariel, Umbriel, Titânia e Oberon',
      rotacao: '18 horas',
      translacao: '84 anos',
      temperatura:  -195,
      chanceDeVida: 'sim',
      populacao: "0",
      curiosidade: " A cor azulada característica do planeta é resultado da absorção de luz realizada pelo gás metano, presente na composição do planeta. Um dia em Urano tem duração de 17 horas terrestres, ou seja, o planeta leva 17 horas para girar em torno de si mesmo."
      
    
    },
    {
      nome: 'Netuno',
      imagem:  'https://williamdev.com.br/wp-content/uploads/2022/07/neturno-300x300.png',
      superficie: '7,618 × 10^9 ',
      diamentro: 49.244,
      distanciaSol: '4,495 × 10^9',
      satelite: 'Tritão, Talassa, Hipocampo, Neso, Nereida, Despina, Galateia, Halimede, Proteu, Náiade, Psámata, Larissa, Laomedeia, Sao',
      rotacao:  '16 horas',
      translacao: '164 anos terrestres',
      temperatura:  -223,
      chanceDeVida: 'sim',
      populacao: "0",
      curiosidade: "Você acha que um furacão é assustador? Imagine um furacão com ventos que chegam à 2.100 km/h! Para você ter uma ideia, os ventos mais rápidos na Terra apenas chegam à 400 km/h."
      
    
    },

  ];

 
  constructor(
    private TamanhoPlanetaService: TamanhoPlanetaService,
    private chanceService: ChanceDeTerVidaPlanetaService,
  

  ){}


  getPlanetas(): Planeta[]{

    this.planetas = this.planetas.map(planeta => {
      planeta.tamanho = this.TamanhoPlanetaService.OTamanhoDoPlanetaEh(planeta);

      planeta.chanceDeVida = this.chanceService.temChance(planeta)

      return planeta;
    });
  
   
    

     return this.planetas;
  }
}