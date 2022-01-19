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

## Redux

1. Component lấy dữ liệu từ Store để thể hiện trên UI (View)
2. Người dùng tương tác lên UI (Ex: onClick button ….)
3. Component đóng vai trò là Action Creator, tạo ra action obj bằng cách tự declare 1 action object (slice2 line 40) hoặc bằng THUNK: 1 async fn that returns the action object (slice2 line 18)
4. Component gọi hàm dispatch với tham số là action obj vừa tạo từ 1 trong 2 cách trên, bao gồm 2 property là type (để store biết nên gọi reducer nào) và payload (tham số cho hàm reducer).
5. Redux store dựa theo type của action object để gọi reducerFn tương ứng
6. Update Store data dựa theo storeState & payload

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

### vs No Pre-rendering

`Hydration`: When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive

![](https://nextjs.org/static/images/learn/data-fetching/pre-rendering.png)
![](https://nextjs.org/static/images/learn/data-fetching/no-pre-rendering.png)

### 2 forms of Pre-rendering

- [Static Generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended) is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
  ![](https://nextjs.org/static/images/learn/data-fetching/static-generation.png)

- [Server-side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering) is the pre-rendering method that generates the HTML on each request.
  ![](https://nextjs.org/static/images/learn/data-fetching/server-side-rendering.png)
