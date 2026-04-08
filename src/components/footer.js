export function Footer() {
  return `
<footer class="">
    <div class="flex flex-col">
    <div class="container max-w-7xl mx-auto h-full px-0">
    <nav class="flex flex-col justify-center items-center py-6.25 px-10 lg:flex-row lg:justify-between lg:items-center">
      <ul class="flex flex-col justify-center items-center gap-6.25 py-3.75 lg:flex-row">
        <li class="max-w-50 max-h-12.5">
          <a href="#"><img src="./src/image/header/logo.svg" alt="logo"></a>
        </li>
        <li class="max-w-29.25 max-h-12.5">
          <a href="#"><img src="./src/image/footer/CD_Projekt_logo.svg" alt="CD_Projekt_logo"></a>
        </li>
      </ul>
        <ul class="flex flex-col justify-center items-center py-6.25 gap-3.75 lg:flex-row">
        <li>
          <a href="#">Лицензия</a>
        </li>
        <li>
          <a href="#">Политика конфиденциальности</a>
        </li>
      </ul>
    </nav>
  </div>
      <div class="bg-black">
        <div class="container max-w-7xl mx-auto h-full px-0">
              <div class="flex justify-center items-center p-3.25">
    <p class="text-white items-center text-[12px]">CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</p>
    </div>
        </div>
  </div>
      </div>
</footer>
  `;
}
