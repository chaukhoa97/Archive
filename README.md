# React

|               | xs  | sm  | md  | lg   | xl   | xxl  |
| :-----------: | :-: | :-: | :-: | ---- | ---- | ---- |
| Ant/Bootstrap |  0  | 576 | 768 | 992  | 1200 | 1400 |
|      MUI      |  0  | 600 | 900 | 1200 | 1536 | N/A  |

## Terms & Notes

- Pass callback vào onClick
  ```js
  let a = <button onClick={() => dispatch('+')}>+</button>;
  ```
- Module CSS
  ```js
  import styles from '../nav.module.scss';
  <h1 className={`${styles['active-nav']} ${styles.red}`}>Hello</h1>;
  ```

# TypeScript

```ts
as ... : ... Assertion
& || extends: Intersection
```

## `Any`, `unknown`, `object`, `void`, `undefined`, `null`, and `never` assignability

The following table summarizes assignability between some abstract types.
Rows indicate what each is assignable to, columns indicate what is assignable to them.
A "<span class='black-tick'>✓</span>" indicates a combination that is compatible only when [`strictNullChecks`](/tsconfig#strictNullChecks) is off.

<!-- This is the rendered form of https://github.com/microsoft/TypeScript-Website/pull/1490 -->
<table class="data">
<thead>
<tr>
<th></th>
<th align="center">any</th>
<th align="center">unknown</th>
<th align="center">object</th>
<th align="center">void</th>
<th align="center">undefined</th>
<th align="center">null</th>
<th align="center">never</th>
</tr>
</thead>
<tbody>
<tr>
<td>any →</td>
<td align="center"></td>
<td align="center"><span class="blue-tick">✓</span></td>
<td align="center"><span class="blue-tick">✓</span></td>
<td align="center"><span class="blue-tick">✓</span></td>
<td align="center"><span class="blue-tick">✓</span></td>
<td align="center"><span class="blue-tick">✓</span></td>
<td align="center"><span class="red-cross">✕</span></td>
</tr>
<tr>
<td>unknown →</td>
<td align="center"><span class="blue-tick">✓</span></td>
<td align="center"></td>
<td align="center"><span class="red-cross">✕</span></td>
<td align="center"><span class="red-cross">✕</span></td>
<td align="center"><span class="red-cross">✕</span></td>
<td align="center"><span class="red-cross">✕</span></td>
<td align="center"><span class="red-cross">✕</span></td>
</tr>
<tr>
<td>object →</td>
<td align="center"><span class="blue-tick">✓</span></td>
<td align="center"><span class="blue-tick">✓</span></td>
<td align="center"></td>
<td align="center"><span class="red-cross">✕</span></td>
<td align="center"><span class="red-cross">✕</span></td>
<td align="center"><span class="red-cross">✕</span></td>
<td align="center"><span class="red-cross">✕</span></td>
</tr>
<tr>
<td>void →</td>
<td align="center"><span class="blue-tick">✓</span></td>
<td align="center"><span class="blue-tick">✓</span></td>
<td align="center"><span class="red-cross">✕</span></td>
<td align="center"></td>
<td align="center"><span class="red-cross">✕</span></td>
<td align="center"><span class="red-cross">✕</span></td>
<td align="center"><span class="red-cross">✕</span></td>
</tr>
<tr>
<td>undefined →</td>
<td align="center"><span class="blue-tick">✓</span></td>
<td align="center"><span class="blue-tick">✓</span></td>
<td align="center"><span class="black-tick">✓</span></td>
<td align="center"><span class="blue-tick">✓</span></td>
<td align="center"></td>
<td align="center"><span class="black-tick">✓</span></td>
<td align="center"><span class="red-cross">✕</span></td>
</tr>
<tr>
<td>null →</td>
<td align="center"><span class="blue-tick">✓</span></td>
<td align="center"><span class="blue-tick">✓</span></td>
<td align="center"><span class="black-tick">✓</span></td>
<td align="center"><span class="black-tick">✓</span></td>
<td align="center"><span class="black-tick">✓</span></td>
<td align="center"></td>
<td align="center"><span class="red-cross">✕</span></td>
</tr>
<tr>
<td>never →</td>
<td align="center"><span class="blue-tick">✓</span></td>
<td align="center"><span class="blue-tick">✓</span></td>
<td align="center"><span class="blue-tick">✓</span></td>
<td align="center"><span class="blue-tick">✓</span></td>
<td align="center"><span class="blue-tick">✓</span></td>
<td align="center"><span class="blue-tick">✓</span></td>
<td align="center"></td>
</tr>
</tbody>
</table>

## Types vs Interfaces

| Aspect                                          | Type | Interface |
| ----------------------------------------------- | :--: | :-------: |
| Can describe functions                          |  ✅  |    ✅     |
| Can describe constructors                       |  ✅  |    ✅     |
| Can describe tuples                             |  ✅  |    ✅     |
| Interfaces can extend it                        |  ⚠️  |    ✅     |
| Classes can extend it                           |  🚫  |    ✅     |
| Classes can implement it (`implements`)         |  ⚠️  |    ✅     |
| Can intersect another one of its kind           |  ✅  |    ⚠️     |
| Can create a union with another one of its kind |  ✅  |    🚫     |
| Can be used to create mapped types              |  ✅  |    🚫     |
| Can be mapped over with mapped types            |  ✅  |    ✅     |
| Expands in error messages and logs              |  ✅  |    🚫     |
| Can be augmented                                |  🚫  |    ✅     |
| Can be recursive                                |  ⚠️  |    ✅     |

# Next.js

```ts
Client-side navigation: Means that the page transition happens using JavaScript
Lazy load: Images are `lazy loaded` by default. That means your page speed isn't penalized for images outside the viewport. Images load as they are scrolled into viewport.
```

## Pre-rendering

**_By default, Next.js pre-renders every page. Nghĩa là Next.js sẽ tạo trước HTML, thay vì để JS ở client-side làm hết_**  
**_Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called `hydration`.)_**

![](https://nextjs.org/static/images/learn/data-fetching/pre-rendering.png)
![](https://nextjs.org/static/images/learn/data-fetching/no-pre-rendering.png)

### 2 forms of Pre-rendering

#### [Static-site Generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended) is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.

Ngoài đẻ HTML ra, SSG còn đẻ ra 1 file `JSON` là kq dc return từ `getStaticProps`. Khi navigate sang ~ page dc pre-render, Next.js sẽ lấy file `JSON` này làm prop cho `page component`. As a result, client-side page transitions will **NOT** call `getStaticProps` vì đã có sẵn JSON mà dùng rồi.

File JSON có dạng:

```json
{
  "pageProps": {
    "post": {
      "id": 57,
      "title": "sed ab est est"
    }
  },
  "__N_SSG": true
}
```

![](https://nextjs.org/static/images/learn/data-fetching/static-generation.png)

#### [Server-side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering):

Khi user request, `getServerSideProps` ko tạo HTML ở build time như SSG mà chỉ tạo file JSON(format giống như trên) làm prop cho page componnent, từ đó render ra trang HTML và trả về cho client.

![](https://nextjs.org/static/images/learn/data-fetching/server-side-rendering.png)

#### [Incremental Static Regeneration](https://vercel.com/docs/concepts/next.js/incremental-static-regeneration): `revalidate: 60`

![](https://vercel.com/_next/image?url=%2Fdocs-proxy%2Fstatic%2Fdocs%2Fconcepts%2Fnext.js%2Fisr%2Fregeneration.png&w=1080&q=75)
Tạo Paths with ISR: Đẻ 100 most popular products từ `getStaticPaths`, user request product khác thì kẹp thêm `fallback`: `true`(`router.isFallback?loading...`) hoặc `'blocking'` (bắt đầu load trang bằng SSR).

1. The initial request to the product page will show the cached page(just like SSG)
2. The data for the product is updated in the CMS.
3. Any requests to the page after the initial request and before the 60 seconds window will show the cached page with old data.
4. After the 60 second window, the next request will still show the same cached page with old data, but Next.js will now trigger a regeneration of the page in the background.
5. Once the page has been successfully generated, Next.js will invalidate the cache and show the updated product page. If the background regeneration fails, the old page remains unaltered.

#### Client-side Rendering

![](https://nextjs.org/static/images/learn/data-fetching/client-side-rendering.png)

```jsx
useEffect(() => {
  fetch('api/profile-data')
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    });
}, []);
```

## Routing:

- Homepage: https://www.example.com → pages/index.js
- Listings: https://www.example.com/products → `pages/products.js` or `pages/products/index.js`
- Product:https://www.example.com/products/nextjs-shirt → pages/products/[product].js
