import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/products/schemas/product.schema';

@Injectable()
export class SeedsService {
  constructor(@InjectModel(Product.name) private readonly productModel: Model<Product>) {
    if(process.env.NODE_ENV === 'development'){
      this.seedProduct();
    }
  }

  private async seedProduct(){
    const hasProduct = await this.productModel.findOne();
    if(!hasProduct){
      await this.productModel.insertMany([
        {
          title : "Teclado Mecânico Usb Klr Outemu",
          description : "O teclado KLR é a arma secreta perfeita para todas as suas batalhas! Com mais precisão e velocidade de resposta, cada clique te guiará para a vitória!",
          availableQty : 10,
          price : 200,
          imgUrl : "https://http2.mlstatic.com/teclado-mecnico-usb-klr-outemu-abnt2-led-red-cabo-18m-D_NQ_NP_976208-MLB43055308248_082020-O.webp",
          inShoppingCart : 0
        },
        {
          title : "Headset Gamer Redragon Zeus H510",
          description : "Desfrute da qualidade de som clara e sem perdas com a tecnologia 7.1 Surround-Sound, fará; com que você; esteja em cena onde quer que seja o campo de jogo. Os drivers de 53 mm oferecem uma faixa de freqüê;ncia mais ampla, campos sonoros mais ricos, alta definiç;ão e som de fidelidade extrema.",
          availableQty : 15,
          price : 399.90,
          imgUrl : "https://images3.kabum.com.br/produtos/fotos/109653/headset-gamer-redragon-zeus-h510-7-1-som-surround-drivers-53mm-preto-vermelho-h510_1580414547_gg.jpg",
          inShoppingCart : 0
        },
        {
          title : "Placa de Vídeo Gigabyte AMD Radeon RX 5600",
          description : "O sistema de refrigeraç;ão WINDFORCE 3X possui ventiladores de lâmina exclusivos de 3x 80 mm, ventilador alternativo, 5 tubos de calor de cobre composto, toque direto do tubo de calor e funcionalidade de ventilador ativo 3D, oferecendo juntos uma capacidade efetiva de dissipaç;ão de calor para desempenho superior em temperaturas mais baixas.",
          availableQty : 10,
          price : 2109.90,
          imgUrl : "https://images6.kabum.com.br/produtos/fotos/109716/placa-de-video-gigabyte-amd-radeon-rx-5600-xt-gaming-oc-6gb-gddr6-gv-r56xtgaming-oc-6gd_1580238961_gg.jpg",
          inShoppingCart : 0
        },
        {
          title : "Mesa Digitalizadora One by Wacom CTL472",
          description : "A CTL472 One by Wacom é uma mesa digitalizadora que oferece toda a tecnologia necessária para você colocar a sua capacidade criativa em prática. Com ela, é possível desenhar, editar fotos, fazer esboços de projetos de maneira eficiente e facilitada. A mesa digitalizadora Wacom está disponível em tamanho pequeno e apresenta caneta digitalizadora, que pode ser usada de maneira confortável, tanto por destros e canhotos que querem abusar da criatividade e versatilidade em projetos digitais. Como se trata de uma mesa digitalizadora pequena, ela não vai ocupar muito espaço do seu desktop, mas apresenta uma área de criação suficiente para você desenvolver os seus trabalhos simples ou complexos. A caneta digital de mesa Wacom foi desenvolvida com muita tecnologia e expertise para apresentar uma série de diferenciais para o usuário. Você sentirá em suas mãos uma caneta digital com aspecto natural, sensível à pressão e totalmente equilibrada, ideal para que todos os traços sejam perfeitos, como se você estivesse esboçando em um papel. A CTL472 também conta com conectividade USB, sendo muito prática. Basta plugar a mesa digitalizadora USB no Smartphone, Mac ou PC, fazer a instalação do Driver e pronto. É só começar a usar o equipamento e criar o quanto você quiser!",
          availableQty : 7,
          price : 548.90,
          imgUrl : "https://images4.kabum.com.br/produtos/fotos/93434/93434_1511270477_index_gg.jpg",
          inShoppingCart : 0
        },
        {
          title : "Mousepad Gamer HyperX Fury S Speed",
          description : "O Mouse Pad Gamer HyperX FURY S Speed Edition possui bordas com costuras perfeitas que não desfiam proporcionando uma superfície uniforme para um deslizar controlado. O mouse pad de tecido com trama compacta oferece uma superfície com sensação suave ao toque, sendo texturizada para o movimento preciso do mouse óptico. O HyperX FURY S Speed Edition apresenta uma superfície em tecido macio para conforto do pulso e uma borracha natural texturizada no verso, projetado para se manter firme quando a ação se torna frenética. FURY S Speed Edition está disponível em quatro tamanhos para se ajustar à sua configuração e pode ser enrolado para facilitar o transporte.",
          availableQty : 3,
          price : 67.90,
          imgUrl : "https://images7.kabum.com.br/produtos/fotos/98067/98067_2_1535052372_gg.jpg",
          inShoppingCart : 0
        },
        {
          title : "Gabinete Gamer Corsair Carbide Series 175R",
          description : "O Carbide Series 175R RGB é um gabinete ATX mid-tower projetado com linhas simples e realçado com uma ventoinha RGB na parte frontal e um painel lateral em vidro temperado.",
          availableQty : 25,
          price : 499.90,
          imgUrl : "https://images6.kabum.com.br/produtos/fotos/102136/gabinete-gamer-corsair-carbide-series-175r-mid-tower-rgb-1-fan-lateral-em-vidro-cc-9011171-ww_1560518451_gg.jpg",
          inShoppingCart : 0
        },
        {
          title : "Caixa de Som Portátil JBL Charge 4",
          description : "Apresentando a caixa de som portátil com Bluetooth, JBL Charge 4, com espectro total, som potente e um carregador integrado para carregar seus dispositivos. Apresenta um driver com design exclusivo e dois radiadores de graves JBL que intensificam o som com graves potentes e profundos. Sua bateria recarregável de íon de lítio de alta capacidade de 7500 mAh permite até 20 horas de reprodução. A caixa de som apresenta uma entrada USB que carrega rapidamente seus dispositivos, como smartphone, para que você nunca mais fique sem bateria. Com design robusto, estrutura externa com classificação IPX7 à prova d?água você escuta suas músicas sem preocupação, podendo amplificar o som com JBL Connect+ com mais de 100 caixas de som compatíveis com a função totalmente sem fios. Bluetooth: Conecte até 2 smartphones ou tablets à caixa de som, sem fi os, e use-os alternadamente, apreciando um som potente. Tempo de reprodução: Bateria recarregável de íon de lítio de 7500 mAH, que suporta até 20 horas de reprodução e carrega dispositivos através de uma porta USB. Á prova d? água- classificação IPX7: Leve a Charge 4 para a praia ou piscina, sem se preocupar com respingos ou até mesmo submersão em água. JBL Connect+: Amplifique sua experiência sonora a níveis épicos e agite a festa de forma perfeita conectando mais de 100 caixas de som sem fios JBL Connect+ compatíveis.",
          availableQty : 8,
          price : 960,
          imgUrl : "https://images6.kabum.com.br/produtos/fotos/102756/caixa-de-som-portatil-jbl-charge-4-bluetooth-20w-a-prova-d-agua-vermelho-jblcharge4red_caixa-de-som-portatil-jbl-charge-4-bluetooth-20w-a-prova-d-agua-vermelho-jblcharge4red_1564413592_gg.jpg",
          inShoppingCart : 0
        },
        {
          title : "Mochila Gamer Husky Avalanche",
          description : "Com um design exclusivo e avançado, a Mochila Gamer Husky Avalanche é ótima para levar aonde você for, com total conforto e segurança. Esqueça o transtorno de carregar uma mochila que não se adapta às suas necessidades! A Husky Avalanche conta com costuras reforçadas aliadas à revestimentos acolchoados e antiderrapantes, além de uma parte frontal emborrachada em todas as alças, que se acomodam perfeitamente aos seus ombros e costas, proporcionando conforto e evitando dores nas costas. Nas laterais, a mochila conta com 2 bolsos ajustáveis para carregar a sua garrafa de água, guarda-chuva, ou o que desejar. Tamanho não é problema para a Mochila Gamer Husky Avalanche, com capacidade para notebooks de até 17.3, seu equipamento sempre acompanhará você em cada compromisso, dentro de um compartimento acolchoado, com material à prova d'água e protegido por fechamento de dois zíperes em metal também presentes na segunda abertura da mochila. Ainda no quesito segurança, a Mochila Gamer Avalanche da Husky oferece um cadeado TSA para sua total tranquilidade. Além de todos os benefícios já mencionados, a Mochila Gamer Husky Avalanche também será sua grande aliada nos dias de chuva. Em um bolso escondido na área inferior do produto, você tem acesso a uma capa de chuva impermeável, pronta para te manter protegido. Quer mais? Que tal conectar seu powerbank e carregar seu dispositivo sem ter que abrir a sua mochila?! Faça isso através de uma estrutura especial, que também conta com abertura para passagem de fones de ouvido. Aproveite as promoções e ofertas do KaBuM! e adquira sua Mochila Gamer Husky Avalanche.",
          availableQty : 50,
          price : 199.90,
          imgUrl : "https://images1.kabum.com.br/produtos/fotos/99471/99471_1554492090_index_gg.jpg",
          inShoppingCart : 0
        }

      ])
    }
  }
}
