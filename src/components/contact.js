export function Contact() {
  return `
<section class="bg-black">
    <div class="flex h-17.5 w-ful">
        <img src="./src/image/contact/bg-w.jpg" alt="bg-w" class="w-full">
    </div>
  <div class="container max-w-7xl mx-auto h-full px-0">
  <div class="lg:flex lg:px-9 lg:gap-8">
    <div class="bg-black pt-1.5 px-3 pb-17.5 md:pt-3.75 md:px-9 lg:px-0 lg:m-w-[460px] w-full">
        <div class="flex flex-col xl:flex-row xl:gap-8 xl:items-center xl:mb-6.25">
            <img src="./src/image/contact/promotion.svg" alt="promotion" class="w-15.5 h-15.5 lg:mb-3.75 lg:w-33 lg:h-33">
            <img src="./src/image/contact/console-m.png" alt="console" class="m-h-[131px] -mt-3.25 lg:hidden">
            <h2 class="text-white mt-6.25 mb-6.25 text-[30px] leading-7.5 lg:text-[62px] lg:leading-15.5 lg:mt-3.75 xl:m-0">Играй и выигрывай!</h2>
        </div>
        <div class="flex flex-col gap-6.25 mb-17.5 xl:max-w-222.5 xl:mb-6.25">
            <p class="font-roboto text-white leading-8 lg:text-[18px] lg:leading-8.5">Играй в <span class="text-blue">Cyberpunk 2077</span> и получи возможность выиграть консоль <span class="text-blue">Xbox Series X</span> или <sapn class="text-blue">Sony PlayStation 5!</sapn> Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)</p>
        </div>
<div class="flex w-full xl:gap-8">
        <form class="flex flex-col gap-8.75 w-full xl:mt-18.25">

          <div>
            <input type="text" placeholder="Как тебя зовут?"
              class="font-roboto w-full bg-transparent border-b border-gray pb-3.25 text-white text-[16px] font-light outline-none placeholder:text-white focus:placeholder-transparent " >
          </div>

          <div>
            <input type="email" placeholder="Твой e-mail"
              class="font-roboto w-full bg-transparent border-b border-gray pb-3.25 text-white text-[16px] font-light outline-none placeholder:text-white focus:placeholder-transparent">
          </div>

          <label class="upload-border min-h-30 flex items-center justify-center text-white text-[16px] font-light cursor-pointer">
            <input type="file" class="hidden">
            <div class="flex flex-col gap-1.75 items-center">
                <span class="font-roboto underline">Прикрепить скриншот</span>
                <span class="font-roboto hidden xl:flex">.png / .jpg / .pdf</span>
            </div>
          </label>

          <button
            type="submit" class="btn font-roboto bts-black font-bold text-[16px] w-full md:w-fit min-w-45.5 hover:opacity-90 transition">
            Отправить
          </button>

        <label class="flex items-center gap-2.5 text-white text-[12px] cursor-pointer -mt-5">
            <input type="checkbox" class="custom-checkbox">
            <span class="font-roboto">Согласен на обработку персональных данных</span>
        </label>

        </form>
    <div class="hidden xl:block">
        <img src="./src/image/contact/console.png" alt="console" >
    </div>
        </div>
    </div>
    <div class="hidden mt-20 lg:block lg:m-w-[468px] lg:w-full xl:hidden">
        <img src="./src/image/contact/console-t.png" alt="console">
    </div>
    </div>
   </div>
</section>
  `;
}
