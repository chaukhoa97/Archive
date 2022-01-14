## TypeScript

```ts
as ... : ... Assertion
& || extends: Intersection
```

---

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
<td align="center"><span class="blue-tick" style="
    color: #007aff;
">✓</span></td>
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
