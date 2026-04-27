export function Benefits() {
  return `
    <section class="bg-yellow">
      <div class="flex h-17.5 w-full">
        <img src="./src/image/benefits/bg-y.jpg" alt="bg-y" class="w-full">
      </div>

      <div class="container max-w-7xl mx-auto h-full px-0">
        <div class="bg-yellow px-3 py-17.5">
          <div class="mx-auto flex flex-col lg:flex-row lg:gap-8">
            <div class="flex flex-col items-center gap-6.25 lg:w-1/2 lg:justify-between">
              <div class="max-w-74 md:max-w-115 md:max-h-79.25 lg:max-w-156.25 lg:max-h-107.5">
                <img src="./src/image/benefits/monitor.png" alt="HP Monitor">
              </div>
              <div class="flex justify-center items-center gap-3 lg:flex-col lg:gap-6.25 xl:flex-row">
                <img src="./src/image/benefits/hp-logo.svg" alt="HP-logo" class="w-11 h-11 lg:w-20 md:h-20">
                <img src="./src/image/benefits/lines.svg" alt="lines" class="w-12.5 h-2.5 lg:w-22.5 md:h-5">
                <img src="./src/image/benefits/cyberpunk-logo.svg" alt="cyberpunk-logo" class="w-43.75 h-11 lg:w-[320px] lg:h-20">
              </div>
            </div>
            
            <div class="mt-10 lg:w-1/2 lg:mt-0">
            <h2 class="text-[32px] leading-none tracking-tight text-black mb-6.25 lg:text-[62px]">
              Полное погружение вместе с HP
            </h2>

            <p class="text-black text-[16px] leading-8 mb-6.25 lg:text-[18px] lg:leading-8.5">
              Погрузись в современные экшен-игры с реалистичным изображением
              с помощью монитора с диагональю 23,8 дюйма, созданном для
              отображения максимально насыщенных цветов. Успевай реагировать
              на любые события с временем отклика 1 мс и частотой в 144 Гц!
            </p>

            <ul class="space-y-6 mb-12">
              <li class="flex items-center gap-4">
                <img src="./src/image/benefits/img1.svg" alt="icon" class="w-7 h-7">
                <span class="text-[16px] leading-none text-black">
                  Яркие насыщенные цвета
                </span>
              </li>

              <li class="flex items-center gap-4">
                <img src="./src/image/benefits/img2.svg" alt="icon" class="w-7 h-7">
                <span class="text-[16px] leading-none text-black">
                  Кристальная четкость изображения
                </span>
              </li>

              <li class="flex items-center gap-4">
                <img src="./src/image/benefits/img3.svg" alt="icon" class="w-7 h-7">
                <span class="text-[16px] leading-none text-black">
                  Быстрые движения и плавный геймплей
                </span>
              </li>
            </ul>

          <button class="btn btn-yellow">
            Подробнее
          </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
