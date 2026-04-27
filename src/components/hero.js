export function Hero() {
  return `
    <section class="flex items-center justify-center text-white text-4xl h-[calc(100vh-125px)] md:h-[calc(100vh-112px)]">
      <div class="container max-w-7xl mx-auto h-full px-0">
      <div class="flex flex-col justify-end items-end h-full md:px-9">
        <div class="bg-yellow flex flex-col justify-center items-center gap-6.25 px-3 py-7.5 lg:p-17.5 md:justify-start w-max h-max clip-cut">
          <h1 class="text-black text-center text-[30px] max-w-73.75 lg:text-[62px] lg:leading-15.5 lg:max-w-121.25">Доступно на всех платформах</h1>
          <button class="btn btn-yellow">Узнать больше</button>
        </div>
        </div>
      </div>
    </section>
  `
}