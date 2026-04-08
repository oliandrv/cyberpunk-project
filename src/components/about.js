export function About() {
  return `
<section>
  <div class="container max-w-7xl mx-auto h-full px-0">
    <div class="flex flex-col py-17.5 lg:px-9 gap-17.5">
      <div class="px-3 flex flex-col gap-6.25 lg:justify-center md:items-center">
        <h2 class="text-[30px] leading-7.5 lg:text-[62px] lg:leading-15.5">
          Найт-Сити изменит тебя навсегда!
        </h2>
        <p>
          <span class="text-blue">Cyberpunk 2077</span> — приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.
        </p>
      </div>

      <div class="grid gap-8">
        <div class="1">
          <img src="./src/image/about/1.jpg" alt="city">
        </div>
        <div class="2">
          <img src="./src/image/about/2.jpg" alt="city">
        </div>
        <div class="3">
          <img src="./src/image/about/3.jpg" alt="city">
        </div>
      </div>
    </div>
  </div>
</section>
  `;
}
