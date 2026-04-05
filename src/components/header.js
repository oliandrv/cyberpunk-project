export function Header() {
  return `
    <header>
    <div class="container max-w-7xl mx-auto h-full px-0">
      <div class="flex flex-col gap-2.5 px-3 py-5  items-center justify-between md:flex-row md:px-9">

        <div class="max-w-50 max-h-12.5 md:max-w-72.5 md:max-h-18.5">
           <a> <img src="./src/image/header/logo.svg" alt="logo"></a>
        </div>

        <nav class="flex gap-7 md:gap-10">
            <a href="#" class="nav-link"> <img src="./src/image/header/youtube.svg" alt="youtube"> </a>
            <a href="#" class="nav-link"> <img src="./src/image/header/vk.svg" alt="vk"> </a>
            <a href="#" class="nav-link"> <img src="./src/image/header/facebook.svg" alt="facebook"> </a>
            <a href="#" class="nav-link"> <img src="./src/image/header/twitter.svg" alt="twitter"> </a>
            <a href="#" class="nav-link"> <img src="./src/image/header/twitch.svg" alt="twitch"> </a>
            <a href="#" class="nav-link"> <img src="./src/image/header/instagram.svg" alt="instagram"> </a>            
        </nav>
</div>
      </div>
    </header>
  `;
}
