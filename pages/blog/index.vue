<template>
  <div>
    <VSection class="static-page">
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
      <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, odio, nisi
        adipisci architecto ipsa autem hic magni quisquam assumenda, consectetur iure!
        Fugiat, necessitatibus nemo eum iusto molestias numquam facilis esse.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, earum. Culpa
        quisquam excepturi modi debitis perferendis eligendi iure incidunt aliquid libero
        voluptatibus earum non sunt unde quas quia, deserunt tenetur!
      </p>

      <ul>
        <li>
          Fuga expedita fugit rem officiis tempora. Dolore distinctio voluptatem quisquam
          modi quo aperiam quasi a eveniet, atque odio, tempore cupiditate accusantium,
          sequi ad quidem neque nam magnam. Tempora, ex aliquam.
        </li>
        <li>
          Fuga expedita fugit rem officiis tempora. Dolore distinctio voluptatem quisquam
          modi quo aperiam quasi a eveniet, atque odio, tempore cupiditate accusantium,
          sequi ad quidem neque nam magnam. Tempora, ex aliquam.
        </li>
        <li>
          Fuga expedita fugit rem officiis tempora. Dolore distinctio voluptatem quisquam
          modi quo aperiam quasi a eveniet, atque odio, tempore cupiditate accusantium,
          sequi ad quidem neque nam magnam. Tempora, ex aliquam.
        </li>
        <li>
          Fuga expedita fugit rem officiis tempora. Dolore distinctio voluptatem quisquam
          modi quo aperiam quasi a eveniet, atque odio, tempore cupiditate accusantium,
          sequi ad quidem neque nam magnam. Tempora, ex aliquam.
        </li>
      </ul>

      <hr />

      <ol>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, impedit!
          Optio tempore incidunt corrupti laborum, perferendis totam non reprehenderit
          maiores facere magnam vel dolorum nulla neque veniam odit nisi minus?
        </li>
        <li>
          Nobis tempora dolores temporibus quod alias veniam accusamus a dicta dolor nemo.
          Voluptatibus, vero. Earum voluptatem laborum amet velit soluta recusandae sit
          incidunt, dolor nisi sequi ex quod pariatur harum!
        </li>
        <li>
          Eos velit voluptas suscipit nesciunt minima quos impedit facere, minus id
          incidunt ut maxime hic error commodi in aliquam similique dolore, officiis ipsa.
          Quae voluptas, vero qui veritatis laudantium sequi!
        </li>
        <li>
          Fuga expedita fugit rem officiis tempora. Dolore distinctio voluptatem quisquam
          modi quo aperiam quasi a eveniet, atque odio, tempore cupiditate accusantium,
          sequi ad quidem neque nam magnam. Tempora, ex aliquam.
        </li>
      </ol>
    </VSection>
  </div>
</template>

<style lang="postcss" scoped>
.static-page {
  max-width: 1024px;
  margin: 0 auto;
}
.static-page li {
  @apply relative pl-5;
}
.static-page li + li {
  @apply mt-4;
}

.static-page ul li::before {
  content: "•";
  @apply absolute left-0 top-2/4 -translate-y-1/2 block;
  left: 0;
  top: 10px;
  color: #084c61;
  font-size: 2rem;
}

.static-page ol li {
  counter-increment: step-counter;
}
.static-page ol li::before {
  content: counter(step-counter) ".";
  @apply absolute left-0 top-2/4 -translate-y-1/2 block;
  left: 2p1;
  top: 12px;
  color: #084c61;
  font-size: 1rem;
  font-weight: bold;
}
</style>
