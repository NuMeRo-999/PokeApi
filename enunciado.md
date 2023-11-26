![Alt text](public/pokeapi_256.png)

Usando la pokeApi se pide: 
  - Al iniciar la app con un retardo de 3s haremos cargar una pantalla con un nav que contendrá:
    - Un buscador de pokemons.
    - Un main que traerá aletoriamente 9 pokemons por página.
    - Un footer con unas flechas para la paginación.
  - En el trascurso de los 3s mientras inicia la app tendremos en el centro un spinner dando vueltas en el centro

  - Cada uno de los elementos de la pag principal debe de estar modularizaco en un componnente diferente

  - Por cada pokemon crearemos una card que contendra:
    - La img del pokemon.
    - Nombre.
    - Tipo.
  
  - El acceso a la api de pokemon se deberá realizar creando una función async await y/o promesas

  API URL (solo 9 pokemons) : https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9

  ## URL TIPOS IMG
  Steel: 
  - https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/52/latest/20221208180543/Tipo_acero_EP.png/120px-Tipo_acero_EP.png
  - https://images.wikidexcdn.net/mwuploads/wikidex/6/6c/latest/20230128124521/Tipo_acero_icono_EP.svg

  Water:
  - https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/59/latest/20221208180426/Tipo_agua_EP.png/120px-Tipo_agua_EP.png
  - https://images.wikidexcdn.net/mwuploads/wikidex/d/d6/latest/20230128124702/Tipo_agua_icono_EP.svg

  Bug: 
  - https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/5d/latest/20221208180434/Tipo_bicho_EP.png/120px-Tipo_bicho_EP.png
  - https://images.wikidexcdn.net/mwuploads/wikidex/1/1a/latest/20230128124809/Tipo_bicho_icono_EP.svg

  Dragon: 
  - https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/b8/latest/20221208180443/Tipo_drag%C3%B3n_EP.png/120px-Tipo_drag%C3%B3n_EP.png
  - https://images.wikidexcdn.net/mwuploads/wikidex/1/15/latest/20230128124905/Tipo_drag%C3%B3n_icono_EP.svg

  Electric:
  - https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/38/latest/20221208180452/Tipo_el%C3%A9ctrico_EP.png/120px-Tipo_el%C3%A9ctrico_EP.png
  - https://images.wikidexcdn.net/mwuploads/wikidex/8/84/latest/20230128125008/Tipo_el%C3%A9ctrico_icono_EP.svg

  Ghost: 
  - https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/03/latest/20221208180503/Tipo_fantasma_EP.png/120px-Tipo_fantasma_EP.png
  - https://images.wikidexcdn.net/mwuploads/wikidex/3/3d/latest/20230128125103/Tipo_fantasma_icono_EP.svg

  Fire: 
  - https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/c0/latest/20221208180625/Tipo_fuego_EP.png/120px-Tipo_fuego_EP.png
  - https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/c0/latest/20221208180625/Tipo_fuego_EP.png/120px-Tipo_fuego_EP.png

  Fairy:
  - https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/c0/latest/20221208180625/Tipo_fuego_EP.png/120px-Tipo_fuego_EP.png
  - https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/c0/latest/20221208180625/Tipo_fuego_EP.png/120px-Tipo_fuego_EP.png

  Ice:
  - https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/17/latest/20221208180641/Tipo_hielo_EP.png/120px-Tipo_hielo_EP.png
  - https://images.wikidexcdn.net/mwuploads/wikidex/a/a6/latest/20230128125423/Tipo_hielo_icono_EP.svg

  Fighting:
  - https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/5f/latest/20221208180651/Tipo_lucha_EP.png/120px-Tipo_lucha_EP.png
  - https://images.wikidexcdn.net/mwuploads/wikidex/f/f2/latest/20230128125518/Tipo_lucha_icono_EP.svg

  Normal:
  - https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/99/latest/20221208180705/Tipo_normal_EP.png/120px-Tipo_normal_EP.png
  - https://images.wikidexcdn.net/mwuploads/wikidex/c/c3/latest/20230128125621/Tipo_normal_icono_EP.svg

  Grass:
  - https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/a7/latest/20221208180710/Tipo_planta_EP.png/120px-Tipo_planta_EP.png
  - https://images.wikidexcdn.net/mwuploads/wikidex/e/ed/latest/20230128125654/Tipo_planta_icono_EP.svg

  Physic:
  - https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/9b/latest/20221208180717/Tipo_ps%C3%ADquico_EP.png/120px-Tipo_ps%C3%ADquico_EP.png
  - https://images.wikidexcdn.net/mwuploads/wikidex/2/22/latest/20230128125735/Tipo_ps%C3%ADquico_icono_EP.svg

  Rock:
  - https://images.wikidexcdn.net/mwuploads/wikidex/thumb/8/88/latest/20221208180726/Tipo_roca_EP.png/120px-Tipo_roca_EP.png
  - https://images.wikidexcdn.net/mwuploads/wikidex/1/14/latest/20230128125805/Tipo_roca_icono_EP.svg

  Dark:
  - https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/de/latest/20221208180734/Tipo_siniestro_EP.png/120px-Tipo_siniestro_EP.png
  - https://images.wikidexcdn.net/mwuploads/wikidex/e/e0/latest/20230128132504/Tipo_siniestro_icono_EP.svg

  Ground:
  - https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/c9/latest/20221208180742/Tipo_tierra_EP.png/120px-Tipo_tierra_EP.png
  - https://images.wikidexcdn.net/mwuploads/wikidex/c/c8/latest/20230128132625/Tipo_tierra_icono_EP.svg

  Poison:
  - https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/11/latest/20221208180751/Tipo_veneno_EP.png/120px-Tipo_veneno_EP.png
  - https://images.wikidexcdn.net/mwuploads/wikidex/f/fa/latest/20230128132735/Tipo_veneno_icono_EP.svg

  Flying:
  - https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/9a/latest/20221208180800/Tipo_volador_EP.png/120px-Tipo_volador_EP.png
  - https://images.wikidexcdn.net/mwuploads/wikidex/6/6b/latest/20230128132815/Tipo_volador_icono_EP.svg
