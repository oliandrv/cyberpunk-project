export function Benefits() {
  return `
    <section class="bg-yellow">
      <div class="flex h-17.5 w-full">
        <img src="./src/image/benefits/bg-y.jpg" alt="bg-y" class="w-full">
      </div>

      <div class="container max-w-7xl mx-auto h-full px-0">
        <div class="bg-yellow px-3 py-17.5">
          <div class="mx-auto flex flex-col lg:flex-row">
            <div class="flex flex-col items-center gap-6.25">
              <div class="max-w-74 md:max-w-115 md:max-h-79.25 lg:max-w-156.25 lg:max-h-107.5">
                <img src="./src/image/benefits/monitor.png" alt="HP Monitor">
              </div>
              <div class="flex justify-center items-center gap-3 lg:flex-col lg:gap-6.25">
                <img src="./src/image/benefits/hp-logo.svg" alt="HP-logo" class="w-11 h-11 lg:w-20 md:h-20">
                <img src="./src/image/benefits/lines.svg" alt="lines" class="w-12.5 h-2.5 lg:w-22.5 md:h-5">
                <img src="./src/image/benefits/cyberpunk-logo.svg" alt="cyberpunk-logo" class="w-43.75 h-11 lg:w-[320px] lg:h-20">
              </div>
            </div>
            
            <div>
            <h2 class="font-bold text-[42px] leading-[1.05] tracking-tight text-black mb-8">
              Полное погружение вместе с HP
            </h2>

            <p class="text-black text-[18px] leading-[1.8] mb-10">
              Погрузись в современные экшен-игры с реалистичным изображением
              с помощью монитора с диагональю 23,8 дюйма, созданном для
              отображения максимально насыщенных цветов. Успевай реагировать
              на любые события с временем отклика 1 мс и частотой в 144 Гц!
            </p>

            <ul class="space-y-6 mb-12">
              <li class="flex items-start gap-4">
                <img src="/images/icon-colors.svg" alt="" class="w-7 h-7 mt-1">
                <span class="text-[20px] leading-[1.3] text-black">
                  Яркие насыщенные цвета
                </span>
              </li>

              <li class="flex items-start gap-4">
                <img src="/images/icon-clear.svg" alt="" class="w-7 h-7 mt-1">
                <span class="text-[20px] leading-[1.3] text-black">
                  Кристальная четкость изображения
                </span>
              </li>

              <li class="flex items-start gap-4">
                <img src="/images/icon-speed.svg" alt="" class="w-7 h-7 mt-1">
                <span class="text-[20px] leading-[1.3] text-black">
                  Быстрые движения и плавный геймплей
                </span>
              </li>
            </ul>

            <a href="#" class="w-full h-[74px] bg-black text-[#F3F000] font-bold text-[26px] flex items-center justify-center hover:opacity-90 transition">
              Подробнее
            </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
