import Image from "next/image";
import { Container } from "./Container";

import ImgAppleStore from "@/assets/btn-apple-store.svg";
import ImgGooglePlay from "@/assets/btn-google-play.svg";
import Arrow from "@/assets/arrow-explorer.svg";
import WomanImage from "@/assets/woman.png";

export function SectionHero() {
  return (
    <section className="w-full h-[700px] bg-img_bg_hero bg-no-repeat bg-center bg-cover">
      <Container>
        <div className=" flex-1 mx-w-[500px]">
          <h1 className="text-white text-7xl font-bold mb-4 text-wrap">
            Tenha seu banco na palma da sua mão.
          </h1>
          <p className="text-white text-xl max-w-[408px] mb-8">
            Todas as operações que você precisa em um só lugar. Simples,
            completo e feito pra você.
          </p>
          <div className="flex gap-4 mb-24">
            <button>
              <Image src={ImgAppleStore} alt="Apple Store" />
            </button>
            <button>
              <Image src={ImgGooglePlay} alt="Google Play" />
            </button>
          </div>
          <button className="flex items-center gap-3">
            <Image src={Arrow} alt="Arrow Down" />
            <span className=" text-white text-sm font-bold">
              Continue Explorando
            </span>
          </button>
        </div>

        <Image
          src={WomanImage}
          alt="Woman"
          width={"700"}
          height={"700"}
          className="mr-[-29px]"
        />
      </Container>
    </section>
  );
}
