// Full Tailwind CSS from WebPeeler (84KB)
// This is embedded directly in the bundle like WebPeeler does

export const TAILWIND_CSS = `/*
! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

[type='text'],input:where(:not([type])),[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select{
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, input:where(:not([type])):focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus{
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #2563eb;
}

input::-moz-placeholder, textarea::-moz-placeholder{
  color: #6b7280;
  opacity: 1;
}

input::placeholder,textarea::placeholder{
  color: #6b7280;
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper{
  padding: 0;
}

::-webkit-date-and-time-value{
  min-height: 1.5em;
  text-align: inherit;
}

::-webkit-datetime-edit{
  display: inline-flex;
}

::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field{
  padding-top: 0;
  padding-bottom: 0;
}

select{
  background-image: url(\${y});
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
}

[multiple],[size]:where(select:not([size="1"])){
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
          print-color-adjust: unset;
}

[type='checkbox'],[type='radio']{
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #2563eb;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox']{
  border-radius: 0px;
}

[type='radio']{
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus{
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked{
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked{
  background-image: url(\${w});
}

@media (forced-colors: active) {

  [type='checkbox']:checked{
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}

[type='radio']:checked{
  background-image: url(\${x});
}

@media (forced-colors: active) {

  [type='radio']:checked{
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}

[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus{
  border-color: transparent;
  background-color: currentColor;
}

[type='checkbox']:indeterminate{
  background-image: url(\${E});
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

@media (forced-colors: active) {

  [type='checkbox']:indeterminate{
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus{
  border-color: transparent;
  background-color: currentColor;
}

[type='file']{
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus{
  outline: 1px solid ButtonText;
  outline: 1px auto -webkit-focus-ring-color;
}

*, ::before, ::after{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
.container{
  width: 100%;
}
@media (min-width: 640px){

  .container{
    max-width: 640px;
  }
}
@media (min-width: 768px){

  .container{
    max-width: 768px;
  }
}
@media (min-width: 1024px){

  .container{
    max-width: 1024px;
  }
}
@media (min-width: 1280px){

  .container{
    max-width: 1280px;
  }
}
@media (min-width: 1536px){

  .container{
    max-width: 1536px;
  }
}
.sr-only{
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.pointer-events-none{
  pointer-events: none;
}
.pointer-events-auto{
  pointer-events: auto;
}
.\\!visible{
  visibility: visible !important;
}
.visible{
  visibility: visible;
}
.collapse{
  visibility: collapse;
}
.static{
  position: static;
}
.\\!fixed{
  position: fixed !important;
}
.fixed{
  position: fixed;
}
.absolute{
  position: absolute;
}
.relative{
  position: relative;
}
.sticky{
  position: sticky;
}
.inset-0{
  inset: 0;
}
.-bottom-3{
  bottom: -12px;
}
.-left-2{
  left: -8px;
}
.-right-2{
  right: -8px;
}
.-right-3{
  right: -12px;
}
.-top-2{
  top: -8px;
}
.-top-3{
  top: -12px;
}
.-top-4{
  top: -16px;
}
.-top-8{
  top: -32px;
}
.bottom-0{
  bottom: 0;
}
.bottom-2{
  bottom: 8px;
}
.bottom-full{
  bottom: 100%;
}
.left-0{
  left: 0;
}
.left-1\\/2{
  left: 50%;
}
.left-full{
  left: 100%;
}
.right-0{
  right: 0;
}
.right-2{
  right: 8px;
}
.right-3{
  right: 12px;
}
.right-4{
  right: 16px;
}
.right-full{
  right: 100%;
}
.top-0{
  top: 0;
}
.top-4{
  top: 16px;
}
.top-full{
  top: 100%;
}
.z-0{
  z-index: 0;
}
.z-10{
  z-index: 10;
}
.z-20{
  z-index: 20;
}
.z-50{
  z-index: 50;
}
.z-\\[9999999999\\]{
  z-index: 9999999999;
}
.z-\\[999999999\\]{
  z-index: 999999999;
}
.m-0{
  margin: 0;
}
.mx-2{
  margin-left: 8px;
  margin-right: 8px;
}
.mx-auto{
  margin-left: auto;
  margin-right: auto;
}
.my-2{
  margin-top: 8px;
  margin-bottom: 8px;
}
.mb-0{
  margin-bottom: 0;
}
.mb-0\\.5{
  margin-bottom: 2px;
}
.mb-1{
  margin-bottom: 4px;
}
.mb-1\\.5{
  margin-bottom: 6px;
}
.mb-2{
  margin-bottom: 8px;
}
.mb-3{
  margin-bottom: 12px;
}
.mb-4{
  margin-bottom: 16px;
}
.mb-5{
  margin-bottom: 20px;
}
.mb-6{
  margin-bottom: 24px;
}
.mb-8{
  margin-bottom: 32px;
}
.ml-0{
  margin-left: 0;
}
.ml-0\\.5{
  margin-left: 2px;
}
.ml-1{
  margin-left: 4px;
}
.ml-2{
  margin-left: 8px;
}
.ml-3{
  margin-left: 12px;
}
.ml-4{
  margin-left: 16px;
}
.ml-7{
  margin-left: 28px;
}
.mr-1{
  margin-right: 4px;
}
.mr-2{
  margin-right: 8px;
}
.mr-3{
  margin-right: 12px;
}
.mt-0{
  margin-top: 0;
}
.mt-0\\.5{
  margin-top: 2px;
}
.mt-1{
  margin-top: 4px;
}
.mt-1\\.5{
  margin-top: 6px;
}
.mt-10{
  margin-top: 40px;
}
.mt-2{
  margin-top: 8px;
}
.mt-3{
  margin-top: 12px;
}
.mt-4{
  margin-top: 16px;
}
.mt-6{
  margin-top: 24px;
}
.mt-auto{
  margin-top: auto;
}
.box-border{
  box-sizing: border-box;
}
.line-clamp-2{
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.block{
  display: block;
}
.inline-block{
  display: inline-block;
}
.inline{
  display: inline;
}
.flex{
  display: flex;
}
.inline-flex{
  display: inline-flex;
}
.table{
  display: table;
}
.grid{
  display: grid;
}
.hidden{
  display: none;
}
.h-0{
  height: 0;
}
.h-1{
  height: 4px;
}
.h-1\\.5{
  height: 6px;
}
.h-10{
  height: 40px;
}
.h-12{
  height: 48px;
}
.h-14{
  height: 56px;
}
.h-16{
  height: 64px;
}
.h-2{
  height: 8px;
}
.h-20{
  height: 80px;
}
.h-3{
  height: 12px;
}
.h-3\\.5{
  height: 14px;
}
.h-4{
  height: 16px;
}
.h-48{
  height: 192px;
}
.h-5{
  height: 20px;
}
.h-6{
  height: 24px;
}
.h-64{
  height: 256px;
}
.h-7{
  height: 28px;
}
.h-8{
  height: 32px;
}
.h-auto{
  height: auto;
}
.h-fit{
  height: -moz-fit-content;
  height: fit-content;
}
.h-full{
  height: 100%;
}
.max-h-40{
  max-height: 160px;
}
.max-h-44{
  max-height: 176px;
}
.max-h-60{
  max-height: 240px;
}
.max-h-72{
  max-height: 288px;
}
.max-h-\\[300px\\]{
  max-height: 300px;
}
.max-h-\\[400px\\]{
  max-height: 400px;
}
.max-h-\\[80vh\\]{
  max-height: 80vh;
}
.max-h-\\[85vh\\]{
  max-height: 85vh;
}
.max-h-\\[90vh\\]{
  max-height: 90vh;
}
.max-h-full{
  max-height: 100%;
}
.min-h-0{
  min-height: 0;
}
.min-h-6{
  min-height: 24px;
}
.w-0{
  width: 0;
}
.w-1{
  width: 4px;
}
.w-1\\.5{
  width: 6px;
}
.w-10{
  width: 40px;
}
.w-12{
  width: 48px;
}
.w-14{
  width: 56px;
}
.w-16{
  width: 64px;
}
.w-2{
  width: 8px;
}
.w-20{
  width: 80px;
}
.w-3{
  width: 12px;
}
.w-3\\.5{
  width: 14px;
}
.w-36{
  width: 144px;
}
.w-4{
  width: 16px;
}
.w-48{
  width: 192px;
}
.w-5{
  width: 20px;
}
.w-6{
  width: 24px;
}
.w-64{
  width: 256px;
}
.w-7{
  width: 28px;
}
.w-8{
  width: 32px;
}
.w-\\[100px\\]{
  width: 100px;
}
.w-\\[1200px\\]{
  width: 1200px;
}
.w-\\[200px\\]{
  width: 200px;
}
.w-\\[260px\\]{
  width: 260px;
}
.w-\\[400px\\]{
  width: 400px;
}
.w-\\[450px\\]{
  width: 450px;
}
.w-\\[500px\\]{
  width: 500px;
}
.w-\\[600px\\]{
  width: 600px;
}
.w-\\[90\\%\\]{
  width: 90%;
}
.w-auto{
  width: auto;
}
.w-fit{
  width: -moz-fit-content;
  width: fit-content;
}
.w-full{
  width: 100%;
}
.w-screen{
  width: 100vw;
}
.min-w-0{
  min-width: 0;
}
.min-w-48{
  min-width: 192px;
}
.min-w-6{
  min-width: 24px;
}
.min-w-fit{
  min-width: -moz-fit-content;
  min-width: fit-content;
}
.max-w-2xl{
  max-width: 672px;
}
.max-w-\\[400px\\]{
  max-width: 400px;
}
.max-w-full{
  max-width: 100%;
}
.max-w-md{
  max-width: 448px;
}
.max-w-sm{
  max-width: 384px;
}
.max-w-xl{
  max-width: 576px;
}
.flex-1{
  flex: 1 1 0%;
}
.flex-auto{
  flex: 1 1 auto;
}
.flex-none{
  flex: none;
}
.flex-shrink{
  flex-shrink: 1;
}
.flex-shrink-0{
  flex-shrink: 0;
}
.shrink-0{
  flex-shrink: 0;
}
.flex-grow{
  flex-grow: 1;
}
.origin-top-right{
  transform-origin: top right;
}
.-translate-x-1\\/2{
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-x-16{
  --tw-translate-x: -64px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-32{
  --tw-translate-y: -128px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-full{
  --tw-translate-y: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-32{
  --tw-translate-x: 128px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-16{
  --tw-translate-y: 64px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-\\[1px\\]{
  --tw-translate-y: 1px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-rotate-90{
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-0{
  --tw-scale-x: 0;
  --tw-scale-y: 0;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-100{
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform{
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform-gpu{
  transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes ping{

  75%, 100%{
    transform: scale(2);
    opacity: 0;
  }
}
.animate-ping{
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}
@keyframes pulse{

  50%{
    opacity: .5;
  }
}
.animate-pulse{
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes spin{

  to{
    transform: rotate(360deg);
  }
}
.animate-spin{
  animation: spin 1s linear infinite;
}
.cursor-default{
  cursor: default;
}
.cursor-not-allowed{
  cursor: not-allowed;
}
.cursor-pointer{
  cursor: pointer;
}
.cursor-wait{
  cursor: wait;
}
.select-none{
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.scroll-py-2{
  scroll-padding-top: 8px;
  scroll-padding-bottom: 8px;
}
.list-inside{
  list-style-position: inside;
}
.list-disc{
  list-style-type: disc;
}
.grid-cols-3{
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.grid-cols-4{
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.flex-row{
  flex-direction: row;
}
.flex-col{
  flex-direction: column;
}
.items-start{
  align-items: flex-start;
}
.items-end{
  align-items: flex-end;
}
.items-center{
  align-items: center;
}
.items-baseline{
  align-items: baseline;
}
.justify-start{
  justify-content: flex-start;
}
.justify-end{
  justify-content: flex-end;
}
.justify-center{
  justify-content: center;
}
.justify-between{
  justify-content: space-between;
}
.gap-0{
  gap: 0;
}
.gap-0\\.5{
  gap: 2px;
}
.gap-1{
  gap: 4px;
}
.gap-1\\.5{
  gap: 6px;
}
.gap-16{
  gap: 64px;
}
.gap-2{
  gap: 8px;
}
.gap-2\\.5{
  gap: 10px;
}
.gap-3{
  gap: 12px;
}
.gap-4{
  gap: 16px;
}
.gap-6{
  gap: 24px;
}
.gap-x-1{
  -moz-column-gap: 4px;
       column-gap: 4px;
}
.gap-x-1\\.5{
  -moz-column-gap: 6px;
       column-gap: 6px;
}
.space-x-1 > :not([hidden]) ~ :not([hidden]){
  --tw-space-x-reverse: 0;
  margin-right: calc(4px * var(--tw-space-x-reverse));
  margin-left: calc(4px * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-2 > :not([hidden]) ~ :not([hidden]){
  --tw-space-x-reverse: 0;
  margin-right: calc(8px * var(--tw-space-x-reverse));
  margin-left: calc(8px * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-3 > :not([hidden]) ~ :not([hidden]){
  --tw-space-x-reverse: 0;
  margin-right: calc(12px * var(--tw-space-x-reverse));
  margin-left: calc(12px * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-4 > :not([hidden]) ~ :not([hidden]){
  --tw-space-x-reverse: 0;
  margin-right: calc(16px * var(--tw-space-x-reverse));
  margin-left: calc(16px * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-1 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(4px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(4px * var(--tw-space-y-reverse));
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(6px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(6px * var(--tw-space-y-reverse));
}
.space-y-2 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(8px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(8px * var(--tw-space-y-reverse));
}
.space-y-3 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(12px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(12px * var(--tw-space-y-reverse));
}
.space-y-4 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(16px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(16px * var(--tw-space-y-reverse));
}
.space-y-6 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(24px * var(--tw-space-y-reverse));
}
.divide-y > :not([hidden]) ~ :not([hidden]){
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
.divide-gray-100 > :not([hidden]) ~ :not([hidden]){
  --tw-divide-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-divide-opacity));
}
.divide-gray-200 > :not([hidden]) ~ :not([hidden]){
  --tw-divide-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-divide-opacity));
}
.divide-gray-300 > :not([hidden]) ~ :not([hidden]){
  --tw-divide-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-divide-opacity));
}
.overflow-auto{
  overflow: auto;
}
.overflow-hidden{
  overflow: hidden;
}
.overflow-scroll{
  overflow: scroll;
}
.overflow-x-auto{
  overflow-x: auto;
}
.overflow-y-auto{
  overflow-y: auto;
}
.overflow-y-scroll{
  overflow-y: scroll;
}
.truncate{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text-ellipsis{
  text-overflow: ellipsis;
}
.whitespace-nowrap{
  white-space: nowrap;
}
.break-all{
  word-break: break-all;
}
.rounded{
  border-radius: 4px;
}
.rounded-2xl{
  border-radius: 16px;
}
.rounded-\\[24px\\]{
  border-radius: 24px;
}
.rounded-full{
  border-radius: 9999px;
}
.rounded-lg{
  border-radius: 8px;
}
.rounded-md{
  border-radius: 6px;
}
.rounded-xl{
  border-radius: 12px;
}
.rounded-t{
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.rounded-t-2xl{
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
.rounded-t-lg{
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.border{
  border-width: 1px;
}
.border-2{
  border-width: 2px;
}
.border-\\[3px\\]{
  border-width: 3px;
}
.border-b{
  border-bottom-width: 1px;
}
.border-b-2{
  border-bottom-width: 2px;
}
.border-l{
  border-left-width: 1px;
}
.border-l-\\[1px\\]{
  border-left-width: 1px;
}
.border-r{
  border-right-width: 1px;
}
.border-t{
  border-top-width: 1px;
}
.border-t-2{
  border-top-width: 2px;
}
.border-none{
  border-style: none;
}
.border-amber-400\\/30{
  border-color: rgb(251 191 36 / 0.3);
}
.border-amber-500\\/20{
  border-color: rgb(245 158 11 / 0.2);
}
.border-amber-500\\/30{
  border-color: rgb(245 158 11 / 0.3);
}
.border-blue-500\\/20{
  border-color: rgb(59 130 246 / 0.2);
}
.border-blue-500\\/30{
  border-color: rgb(59 130 246 / 0.3);
}
.border-emerald-400\\/30{
  border-color: rgb(52 211 153 / 0.3);
}
.border-emerald-500\\/30{
  border-color: rgb(16 185 129 / 0.3);
}
.border-gray-300{
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}
.border-gray-900{
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}
.border-indigo-400\\/30{
  border-color: rgb(129 140 248 / 0.3);
}
.border-orange-300\\/50{
  border-color: rgb(253 186 116 / 0.5);
}
.border-purple-400\\/50{
  border-color: rgb(192 132 252 / 0.5);
}
.border-purple-500\\/20{
  border-color: rgb(168 85 247 / 0.2);
}
.border-purple-500\\/30{
  border-color: rgb(168 85 247 / 0.3);
}
.border-purple-500\\/40{
  border-color: rgb(168 85 247 / 0.4);
}
.border-purple-500\\/50{
  border-color: rgb(168 85 247 / 0.5);
}
.border-red-500\\/30{
  border-color: rgb(239 68 68 / 0.3);
}
.border-rose-500\\/30{
  border-color: rgb(244 63 94 / 0.3);
}
.border-white{
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}
.border-white\\/10{
  border-color: rgb(255 255 255 / 0.1);
}
.border-white\\/5{
  border-color: rgb(255 255 255 / 0.05);
}
.border-yellow-500\\/20{
  border-color: rgb(234 179 8 / 0.2);
}
.border-zinc-400{
  --tw-border-opacity: 1;
  border-color: rgb(161 161 170 / var(--tw-border-opacity));
}
.border-zinc-500\\/30{
  border-color: rgb(113 113 122 / 0.3);
}
.border-zinc-600{
  --tw-border-opacity: 1;
  border-color: rgb(82 82 91 / var(--tw-border-opacity));
}
.border-zinc-600\\/30{
  border-color: rgb(82 82 91 / 0.3);
}
.border-zinc-600\\/50{
  border-color: rgb(82 82 91 / 0.5);
}
.border-zinc-700{
  --tw-border-opacity: 1;
  border-color: rgb(63 63 70 / var(--tw-border-opacity));
}
.border-zinc-700\\/30{
  border-color: rgb(63 63 70 / 0.3);
}
.border-zinc-700\\/50{
  border-color: rgb(63 63 70 / 0.5);
}
.border-zinc-800{
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity));
}
.border-zinc-800\\/50{
  border-color: rgb(39 39 42 / 0.5);
}
.border-zinc-900{
  --tw-border-opacity: 1;
  border-color: rgb(24 24 27 / var(--tw-border-opacity));
}
.bg-amber-200\\/90{
  background-color: rgb(253 230 138 / 0.9);
}
.bg-amber-500\\/10{
  background-color: rgb(245 158 11 / 0.1);
}
.bg-amber-500\\/20{
  background-color: rgb(245 158 11 / 0.2);
}
.bg-black\\/20{
  background-color: rgb(0 0 0 / 0.2);
}
.bg-black\\/40{
  background-color: rgb(0 0 0 / 0.4);
}
.bg-black\\/60{
  background-color: rgb(0 0 0 / 0.6);
}
.bg-black\\/70{
  background-color: rgb(0 0 0 / 0.7);
}
.bg-black\\/80{
  background-color: rgb(0 0 0 / 0.8);
}
.bg-blue-200{
  --tw-bg-opacity: 1;
  background-color: rgb(191 219 254 / var(--tw-bg-opacity));
}
.bg-blue-500{
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}
.bg-blue-500\\/10{
  background-color: rgb(59 130 246 / 0.1);
}
.bg-blue-500\\/20{
  background-color: rgb(59 130 246 / 0.2);
}
.bg-blue-500\\/5{
  background-color: rgb(59 130 246 / 0.05);
}
.bg-blue-900\\/50{
  background-color: rgb(30 58 138 / 0.5);
}
.bg-emerald-400{
  --tw-bg-opacity: 1;
  background-color: rgb(52 211 153 / var(--tw-bg-opacity));
}
.bg-emerald-500\\/20{
  background-color: rgb(16 185 129 / 0.2);
}
.bg-gray-100{
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
.bg-gray-300{
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}
.bg-gray-500{
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}
.bg-gray-900{
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}
.bg-gray-900\\/80{
  background-color: rgb(17 24 39 / 0.8);
}
.bg-green-100{
  --tw-bg-opacity: 1;
  background-color: rgb(220 252 231 / var(--tw-bg-opacity));
}
.bg-green-400{
  --tw-bg-opacity: 1;
  background-color: rgb(74 222 128 / var(--tw-bg-opacity));
}
.bg-green-500{
  --tw-bg-opacity: 1;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity));
}
.bg-green-500\\/20{
  background-color: rgb(34 197 94 / 0.2);
}
.bg-green-600{
  --tw-bg-opacity: 1;
  background-color: rgb(22 163 74 / var(--tw-bg-opacity));
}
.bg-green-900\\/50{
  background-color: rgb(20 83 45 / 0.5);
}
.bg-indigo-500\\/10{
  background-color: rgb(99 102 241 / 0.1);
}
.bg-indigo-500\\/20{
  background-color: rgb(99 102 241 / 0.2);
}
.bg-indigo-500\\/30{
  background-color: rgb(99 102 241 / 0.3);
}
.bg-indigo-600{
  --tw-bg-opacity: 1;
  background-color: rgb(79 70 229 / var(--tw-bg-opacity));
}
.bg-orange-500\\/10{
  background-color: rgb(249 115 22 / 0.1);
}
.bg-purple-400{
  --tw-bg-opacity: 1;
  background-color: rgb(192 132 252 / var(--tw-bg-opacity));
}
.bg-purple-500{
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity));
}
.bg-purple-500\\/10{
  background-color: rgb(168 85 247 / 0.1);
}
.bg-purple-500\\/20{
  background-color: rgb(168 85 247 / 0.2);
}
.bg-purple-500\\/50{
  background-color: rgb(168 85 247 / 0.5);
}
.bg-red-100{
  --tw-bg-opacity: 1;
  background-color: rgb(254 226 226 / var(--tw-bg-opacity));
}
.bg-red-300{
  --tw-bg-opacity: 1;
  background-color: rgb(252 165 165 / var(--tw-bg-opacity));
}
.bg-red-500{
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}
.bg-red-500\\/10{
  background-color: rgb(239 68 68 / 0.1);
}
.bg-red-500\\/20{
  background-color: rgb(239 68 68 / 0.2);
}
.bg-red-900\\/50{
  background-color: rgb(127 29 29 / 0.5);
}
.bg-rose-400{
  --tw-bg-opacity: 1;
  background-color: rgb(251 113 133 / var(--tw-bg-opacity));
}
.bg-rose-500\\/20{
  background-color: rgb(244 63 94 / 0.2);
}
.bg-slate-100{
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
}
.bg-transparent{
  background-color: transparent;
}
.bg-white{
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.bg-yellow-100{
  --tw-bg-opacity: 1;
  background-color: rgb(254 249 195 / var(--tw-bg-opacity));
}
.bg-yellow-200{
  --tw-bg-opacity: 1;
  background-color: rgb(254 240 138 / var(--tw-bg-opacity));
}
.bg-yellow-400{
  --tw-bg-opacity: 1;
  background-color: rgb(250 204 21 / var(--tw-bg-opacity));
}
.bg-yellow-500{
  --tw-bg-opacity: 1;
  background-color: rgb(234 179 8 / var(--tw-bg-opacity));
}
.bg-yellow-500\\/10{
  background-color: rgb(234 179 8 / 0.1);
}
.bg-yellow-500\\/20{
  background-color: rgb(234 179 8 / 0.2);
}
.bg-zinc-400{
  --tw-bg-opacity: 1;
  background-color: rgb(161 161 170 / var(--tw-bg-opacity));
}
.bg-zinc-500{
  --tw-bg-opacity: 1;
  background-color: rgb(113 113 122 / var(--tw-bg-opacity));
}
.bg-zinc-500\\/20{
  background-color: rgb(113 113 122 / 0.2);
}
.bg-zinc-600{
  --tw-bg-opacity: 1;
  background-color: rgb(82 82 91 / var(--tw-bg-opacity));
}
.bg-zinc-700{
  --tw-bg-opacity: 1;
  background-color: rgb(63 63 70 / var(--tw-bg-opacity));
}
.bg-zinc-700\\/30{
  background-color: rgb(63 63 70 / 0.3);
}
.bg-zinc-700\\/40{
  background-color: rgb(63 63 70 / 0.4);
}
.bg-zinc-700\\/50{
  background-color: rgb(63 63 70 / 0.5);
}
.bg-zinc-800{
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity));
}
.bg-zinc-800\\/20{
  background-color: rgb(39 39 42 / 0.2);
}
.bg-zinc-800\\/30{
  background-color: rgb(39 39 42 / 0.3);
}
.bg-zinc-800\\/40{
  background-color: rgb(39 39 42 / 0.4);
}
.bg-zinc-800\\/50{
  background-color: rgb(39 39 42 / 0.5);
}
.bg-zinc-900{
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity));
}
.bg-zinc-900\\/50{
  background-color: rgb(24 24 27 / 0.5);
}
.bg-zinc-900\\/95{
  background-color: rgb(24 24 27 / 0.95);
}
.bg-opacity-10{
  --tw-bg-opacity: 0.1;
}
.bg-opacity-25{
  --tw-bg-opacity: 0.25;
}
.bg-opacity-40{
  --tw-bg-opacity: 0.4;
}
.bg-opacity-50{
  --tw-bg-opacity: 0.5;
}
.bg-gradient-to-b{
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
}
.bg-gradient-to-br{
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}
.bg-gradient-to-r{
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.bg-gradient-to-tr{
  background-image: linear-gradient(to top right, var(--tw-gradient-stops));
}
.from-amber-400{
  --tw-gradient-from: #fbbf24 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(251 191 36 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-amber-500{
  --tw-gradient-from: #f59e0b var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(245 158 11 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-amber-500\\/10{
  --tw-gradient-from: rgb(245 158 11 / 0.1) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(245 158 11 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-amber-500\\/20{
  --tw-gradient-from: rgb(245 158 11 / 0.2) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(245 158 11 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-amber-500\\/5{
  --tw-gradient-from: rgb(245 158 11 / 0.05) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(245 158 11 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-amber-500\\/90{
  --tw-gradient-from: rgb(245 158 11 / 0.9) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(245 158 11 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-blue-500{
  --tw-gradient-from: #3b82f6 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(59 130 246 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-blue-500\\/20{
  --tw-gradient-from: rgb(59 130 246 / 0.2) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(59 130 246 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-emerald-500\\/90{
  --tw-gradient-from: rgb(16 185 129 / 0.9) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(16 185 129 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-green-400{
  --tw-gradient-from: #4ade80 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(74 222 128 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-green-500{
  --tw-gradient-from: #22c55e var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(34 197 94 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-green-500\\/20{
  --tw-gradient-from: rgb(34 197 94 / 0.2) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(34 197 94 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-indigo-500{
  --tw-gradient-from: #6366f1 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(99 102 241 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-indigo-500\\/20{
  --tw-gradient-from: rgb(99 102 241 / 0.2) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(99 102 241 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-indigo-600{
  --tw-gradient-from: #4f46e5 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(79 70 229 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-orange-500{
  --tw-gradient-from: #f97316 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(249 115 22 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-purple-400{
  --tw-gradient-from: #c084fc var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(192 132 252 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-purple-500{
  --tw-gradient-from: #a855f7 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(168 85 247 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-purple-500\\/10{
  --tw-gradient-from: rgb(168 85 247 / 0.1) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(168 85 247 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-purple-500\\/20{
  --tw-gradient-from: rgb(168 85 247 / 0.2) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(168 85 247 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-purple-600{
  --tw-gradient-from: #9333ea var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(147 51 234 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-purple-600\\/20{
  --tw-gradient-from: rgb(147 51 234 / 0.2) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(147 51 234 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-purple-900\\/20{
  --tw-gradient-from: rgb(88 28 135 / 0.2) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(88 28 135 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-rose-500\\/20{
  --tw-gradient-from: rgb(244 63 94 / 0.2) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(244 63 94 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-yellow-200{
  --tw-gradient-from: #fef08a var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(254 240 138 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-yellow-500{
  --tw-gradient-from: #eab308 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(234 179 8 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-zinc-700{
  --tw-gradient-from: #3f3f46 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(63 63 70 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-zinc-700\\/80{
  --tw-gradient-from: rgb(63 63 70 / 0.8) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(63 63 70 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-zinc-800{
  --tw-gradient-from: #27272a var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(39 39 42 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-zinc-800\\/50{
  --tw-gradient-from: rgb(39 39 42 / 0.5) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(39 39 42 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-zinc-800\\/80{
  --tw-gradient-from: rgb(39 39 42 / 0.8) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(39 39 42 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-zinc-800\\/95{
  --tw-gradient-from: rgb(39 39 42 / 0.95) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(39 39 42 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-zinc-900{
  --tw-gradient-from: #18181b var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(24 24 27 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-zinc-900\\/95{
  --tw-gradient-from: rgb(24 24 27 / 0.95) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(24 24 27 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.via-zinc-900{
  --tw-gradient-to: rgb(24 24 27 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #18181b var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.via-zinc-900\\/50{
  --tw-gradient-to: rgb(24 24 27 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), rgb(24 24 27 / 0.5) var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.to-amber-400{
  --tw-gradient-to: #fbbf24 var(--tw-gradient-to-position);
}
.to-amber-500{
  --tw-gradient-to: #f59e0b var(--tw-gradient-to-position);
}
.to-amber-600\\/10{
  --tw-gradient-to: rgb(217 119 6 / 0.1) var(--tw-gradient-to-position);
}
.to-amber-600\\/90{
  --tw-gradient-to: rgb(217 119 6 / 0.9) var(--tw-gradient-to-position);
}
.to-blue-400{
  --tw-gradient-to: #60a5fa var(--tw-gradient-to-position);
}
.to-blue-500{
  --tw-gradient-to: #3b82f6 var(--tw-gradient-to-position);
}
.to-blue-500\\/20{
  --tw-gradient-to: rgb(59 130 246 / 0.2) var(--tw-gradient-to-position);
}
.to-cyan-400{
  --tw-gradient-to: #22d3ee var(--tw-gradient-to-position);
}
.to-cyan-500\\/20{
  --tw-gradient-to: rgb(6 182 212 / 0.2) var(--tw-gradient-to-position);
}
.to-emerald-400{
  --tw-gradient-to: #34d399 var(--tw-gradient-to-position);
}
.to-emerald-500{
  --tw-gradient-to: #10b981 var(--tw-gradient-to-position);
}
.to-emerald-500\\/20{
  --tw-gradient-to: rgb(16 185 129 / 0.2) var(--tw-gradient-to-position);
}
.to-emerald-600{
  --tw-gradient-to: #059669 var(--tw-gradient-to-position);
}
.to-emerald-600\\/90{
  --tw-gradient-to: rgb(5 150 105 / 0.9) var(--tw-gradient-to-position);
}
.to-green-400{
  --tw-gradient-to: #4ade80 var(--tw-gradient-to-position);
}
.to-indigo-600{
  --tw-gradient-to: #4f46e5 var(--tw-gradient-to-position);
}
.to-orange-400{
  --tw-gradient-to: #fb923c var(--tw-gradient-to-position);
}
.to-orange-500\\/20{
  --tw-gradient-to: rgb(249 115 22 / 0.2) var(--tw-gradient-to-position);
}
.to-pink-400{
  --tw-gradient-to: #f472b6 var(--tw-gradient-to-position);
}
.to-pink-500{
  --tw-gradient-to: #ec4899 var(--tw-gradient-to-position);
}
.to-pink-500\\/20{
  --tw-gradient-to: rgb(236 72 153 / 0.2) var(--tw-gradient-to-position);
}
.to-pink-600{
  --tw-gradient-to: #db2777 var(--tw-gradient-to-position);
}
.to-purple-400{
  --tw-gradient-to: #c084fc var(--tw-gradient-to-position);
}
.to-purple-500{
  --tw-gradient-to: #a855f7 var(--tw-gradient-to-position);
}
.to-purple-500\\/10{
  --tw-gradient-to: rgb(168 85 247 / 0.1) var(--tw-gradient-to-position);
}
.to-purple-600\\/10{
  --tw-gradient-to: rgb(147 51 234 / 0.1) var(--tw-gradient-to-position);
}
.to-purple-800\\/20{
  --tw-gradient-to: rgb(107 33 168 / 0.2) var(--tw-gradient-to-position);
}
.to-purple-900\\/30{
  --tw-gradient-to: rgb(88 28 135 / 0.3) var(--tw-gradient-to-position);
}
.to-transparent{
  --tw-gradient-to: transparent var(--tw-gradient-to-position);
}
.to-violet-400{
  --tw-gradient-to: #a78bfa var(--tw-gradient-to-position);
}
.to-violet-500\\/20{
  --tw-gradient-to: rgb(139 92 246 / 0.2) var(--tw-gradient-to-position);
}
.to-yellow-400{
  --tw-gradient-to: #facc15 var(--tw-gradient-to-position);
}
.to-yellow-500{
  --tw-gradient-to: #eab308 var(--tw-gradient-to-position);
}
.to-yellow-500\\/10{
  --tw-gradient-to: rgb(234 179 8 / 0.1) var(--tw-gradient-to-position);
}
.to-yellow-500\\/5{
  --tw-gradient-to: rgb(234 179 8 / 0.05) var(--tw-gradient-to-position);
}
.to-zinc-500{
  --tw-gradient-to: #71717a var(--tw-gradient-to-position);
}
.to-zinc-600{
  --tw-gradient-to: #52525b var(--tw-gradient-to-position);
}
.to-zinc-700{
  --tw-gradient-to: #3f3f46 var(--tw-gradient-to-position);
}
.to-zinc-800{
  --tw-gradient-to: #27272a var(--tw-gradient-to-position);
}
.to-zinc-800\\/30{
  --tw-gradient-to: rgb(39 39 42 / 0.3) var(--tw-gradient-to-position);
}
.to-zinc-800\\/50{
  --tw-gradient-to: rgb(39 39 42 / 0.5) var(--tw-gradient-to-position);
}
.to-zinc-800\\/80{
  --tw-gradient-to: rgb(39 39 42 / 0.8) var(--tw-gradient-to-position);
}
.to-zinc-800\\/90{
  --tw-gradient-to: rgb(39 39 42 / 0.9) var(--tw-gradient-to-position);
}
.to-zinc-800\\/95{
  --tw-gradient-to: rgb(39 39 42 / 0.95) var(--tw-gradient-to-position);
}
.to-zinc-900{
  --tw-gradient-to: #18181b var(--tw-gradient-to-position);
}
.to-zinc-900\\/95{
  --tw-gradient-to: rgb(24 24 27 / 0.95) var(--tw-gradient-to-position);
}
.to-zinc-950{
  --tw-gradient-to: #09090b var(--tw-gradient-to-position);
}
.bg-clip-text{
  -webkit-background-clip: text;
          background-clip: text;
}
.fill-green-500{
  fill: #22c55e;
}
.fill-white{
  fill: #fff;
}
.object-cover{
  -o-object-fit: cover;
     object-fit: cover;
}
.p-1{
  padding: 4px;
}
.p-1\\.5{
  padding: 6px;
}
.p-2{
  padding: 8px;
}
.p-2\\.5{
  padding: 10px;
}
.p-3{
  padding: 12px;
}
.p-4{
  padding: 16px;
}
.p-6{
  padding: 24px;
}
.px-1{
  padding-left: 4px;
  padding-right: 4px;
}
.px-1\\.5{
  padding-left: 6px;
  padding-right: 6px;
}
.px-2{
  padding-left: 8px;
  padding-right: 8px;
}
.px-2\\.5{
  padding-left: 10px;
  padding-right: 10px;
}
.px-3{
  padding-left: 12px;
  padding-right: 12px;
}
.px-4{
  padding-left: 16px;
  padding-right: 16px;
}
.px-6{
  padding-left: 24px;
  padding-right: 24px;
}
.px-8{
  padding-left: 32px;
  padding-right: 32px;
}
.py-0{
  padding-top: 0;
  padding-bottom: 0;
}
.py-0\\.5{
  padding-top: 2px;
  padding-bottom: 2px;
}
.py-1{
  padding-top: 4px;
  padding-bottom: 4px;
}
.py-1\\.5{
  padding-top: 6px;
  padding-bottom: 6px;
}
.py-2{
  padding-top: 8px;
  padding-bottom: 8px;
}
.py-2\\.5{
  padding-top: 10px;
  padding-bottom: 10px;
}
.py-3{
  padding-top: 12px;
  padding-bottom: 12px;
}
.py-4{
  padding-top: 16px;
  padding-bottom: 16px;
}
.py-6{
  padding-top: 24px;
  padding-bottom: 24px;
}
.pb-3{
  padding-bottom: 12px;
}
.pb-4{
  padding-bottom: 16px;
}
.pb-6{
  padding-bottom: 24px;
}
.pl-4{
  padding-left: 16px;
}
.pr-1{
  padding-right: 4px;
}
.pr-2{
  padding-right: 8px;
}
.pr-3{
  padding-right: 12px;
}
.pr-4{
  padding-right: 16px;
}
.pt-0{
  padding-top: 0;
}
.pt-0\\.5{
  padding-top: 2px;
}
.pt-2{
  padding-top: 8px;
}
.pt-3{
  padding-top: 12px;
}
.text-left{
  text-align: left;
}
.text-center{
  text-align: center;
}
.text-right{
  text-align: right;
}
.font-mono{
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
.font-sans{
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.font-serif{
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
}
.text-2xl{
  font-size: 24px;
  line-height: 32px;
}
.text-3xl{
  font-size: 30px;
  line-height: 36px;
}
.text-4xl{
  font-size: 36px;
  line-height: 36px;
}
.text-\\[10px\\]{
  font-size: 10px;
}
.text-\\[11px\\]{
  font-size: 11px;
}
.text-base{
  font-size: 16px;
  line-height: 24px;
}
.text-lg{
  font-size: 18px;
  line-height: 28px;
}
.text-sm{
  font-size: 14px;
  line-height: 20px;
}
.text-xl{
  font-size: 20px;
  line-height: 28px;
}
.text-xs{
  font-size: 12px;
  line-height: 16px;
}
.font-bold{
  font-weight: 700;
}
.font-medium{
  font-weight: 500;
}
.font-normal{
  font-weight: 400;
}
.font-semibold{
  font-weight: 600;
}
.uppercase{
  text-transform: uppercase;
}
.lowercase{
  text-transform: lowercase;
}
.italic{
  font-style: italic;
}
.leading-6{
  line-height: 24px;
}
.leading-relaxed{
  line-height: 1.625;
}
.tracking-tight{
  letter-spacing: -0.025em;
}
.tracking-wide{
  letter-spacing: 0.025em;
}
.tracking-wider{
  letter-spacing: 0.05em;
}
.text-amber-200\\/60{
  color: rgb(253 230 138 / 0.6);
}
.text-amber-400{
  --tw-text-opacity: 1;
  color: rgb(251 191 36 / var(--tw-text-opacity));
}
.text-amber-500\\/50{
  color: rgb(245 158 11 / 0.5);
}
.text-amber-500\\/80{
  color: rgb(245 158 11 / 0.8);
}
.text-amber-900{
  --tw-text-opacity: 1;
  color: rgb(120 53 15 / var(--tw-text-opacity));
}
.text-black{
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}
.text-blue-200{
  --tw-text-opacity: 1;
  color: rgb(191 219 254 / var(--tw-text-opacity));
}
.text-blue-200\\/60{
  color: rgb(191 219 254 / 0.6);
}
.text-blue-300{
  --tw-text-opacity: 1;
  color: rgb(147 197 253 / var(--tw-text-opacity));
}
.text-blue-400{
  --tw-text-opacity: 1;
  color: rgb(96 165 250 / var(--tw-text-opacity));
}
.text-cyan-400{
  --tw-text-opacity: 1;
  color: rgb(34 211 238 / var(--tw-text-opacity));
}
.text-emerald-300{
  --tw-text-opacity: 1;
  color: rgb(110 231 183 / var(--tw-text-opacity));
}
.text-emerald-400{
  --tw-text-opacity: 1;
  color: rgb(52 211 153 / var(--tw-text-opacity));
}
.text-gray-200{
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}
.text-gray-300{
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}
.text-gray-400{
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}
.text-gray-500{
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.text-gray-600{
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}
.text-gray-800{
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}
.text-gray-900{
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}
.text-green-200{
  --tw-text-opacity: 1;
  color: rgb(187 247 208 / var(--tw-text-opacity));
}
.text-green-200\\/60{
  color: rgb(187 247 208 / 0.6);
}
.text-green-400{
  --tw-text-opacity: 1;
  color: rgb(74 222 128 / var(--tw-text-opacity));
}
.text-green-500{
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity));
}
.text-green-700{
  --tw-text-opacity: 1;
  color: rgb(21 128 61 / var(--tw-text-opacity));
}
.text-green-800{
  --tw-text-opacity: 1;
  color: rgb(22 101 52 / var(--tw-text-opacity));
}
.text-indigo-200\\/60{
  color: rgb(199 210 254 / 0.6);
}
.text-indigo-300{
  --tw-text-opacity: 1;
  color: rgb(165 180 252 / var(--tw-text-opacity));
}
.text-indigo-400{
  --tw-text-opacity: 1;
  color: rgb(129 140 248 / var(--tw-text-opacity));
}
.text-indigo-600{
  --tw-text-opacity: 1;
  color: rgb(79 70 229 / var(--tw-text-opacity));
}
.text-orange-400{
  --tw-text-opacity: 1;
  color: rgb(251 146 60 / var(--tw-text-opacity));
}
.text-orange-400\\/30{
  color: rgb(251 146 60 / 0.3);
}
.text-pink-400{
  --tw-text-opacity: 1;
  color: rgb(244 114 182 / var(--tw-text-opacity));
}
.text-purple-100{
  --tw-text-opacity: 1;
  color: rgb(243 232 255 / var(--tw-text-opacity));
}
.text-purple-200{
  --tw-text-opacity: 1;
  color: rgb(233 213 255 / var(--tw-text-opacity));
}
.text-purple-300{
  --tw-text-opacity: 1;
  color: rgb(216 180 254 / var(--tw-text-opacity));
}
.text-purple-400{
  --tw-text-opacity: 1;
  color: rgb(192 132 252 / var(--tw-text-opacity));
}
.text-purple-500{
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity));
}
.text-purple-500\\/50{
  color: rgb(168 85 247 / 0.5);
}
.text-purple-500\\/80{
  color: rgb(168 85 247 / 0.8);
}
.text-red-200{
  --tw-text-opacity: 1;
  color: rgb(254 202 202 / var(--tw-text-opacity));
}
.text-red-400{
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity));
}
.text-red-500{
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}
.text-red-600\\/75{
  color: rgb(220 38 38 / 0.75);
}
.text-rose-200\\/60{
  color: rgb(254 205 211 / 0.6);
}
.text-rose-300{
  --tw-text-opacity: 1;
  color: rgb(253 164 175 / var(--tw-text-opacity));
}
.text-rose-400{
  --tw-text-opacity: 1;
  color: rgb(251 113 133 / var(--tw-text-opacity));
}
.text-transparent{
  color: transparent;
}
.text-white{
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.text-white\\/60{
  color: rgb(255 255 255 / 0.6);
}
.text-white\\/70{
  color: rgb(255 255 255 / 0.7);
}
.text-white\\/90{
  color: rgb(255 255 255 / 0.9);
}
.text-yellow-200\\/60{
  color: rgb(254 240 138 / 0.6);
}
.text-yellow-200\\/80{
  color: rgb(254 240 138 / 0.8);
}
.text-yellow-200\\/90{
  color: rgb(254 240 138 / 0.9);
}
.text-yellow-300{
  --tw-text-opacity: 1;
  color: rgb(253 224 71 / var(--tw-text-opacity));
}
.text-yellow-400{
  --tw-text-opacity: 1;
  color: rgb(250 204 21 / var(--tw-text-opacity));
}
.text-yellow-500{
  --tw-text-opacity: 1;
  color: rgb(234 179 8 / var(--tw-text-opacity));
}
.text-yellow-500\\/20{
  color: rgb(234 179 8 / 0.2);
}
.text-yellow-900{
  --tw-text-opacity: 1;
  color: rgb(113 63 18 / var(--tw-text-opacity));
}
.text-zinc-100{
  --tw-text-opacity: 1;
  color: rgb(244 244 245 / var(--tw-text-opacity));
}
.text-zinc-200{
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity));
}
.text-zinc-300{
  --tw-text-opacity: 1;
  color: rgb(212 212 216 / var(--tw-text-opacity));
}
.text-zinc-400{
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity));
}
.text-zinc-500{
  --tw-text-opacity: 1;
  color: rgb(113 113 122 / var(--tw-text-opacity));
}
.text-zinc-600{
  --tw-text-opacity: 1;
  color: rgb(82 82 91 / var(--tw-text-opacity));
}
.text-zinc-700{
  --tw-text-opacity: 1;
  color: rgb(63 63 70 / var(--tw-text-opacity));
}
.text-zinc-700\\/30{
  color: rgb(63 63 70 / 0.3);
}
.text-zinc-900{
  --tw-text-opacity: 1;
  color: rgb(24 24 27 / var(--tw-text-opacity));
}
.underline{
  text-decoration-line: underline;
}
.line-through{
  text-decoration-line: line-through;
}
.placeholder-zinc-500::-moz-placeholder{
  --tw-placeholder-opacity: 1;
  color: rgb(113 113 122 / var(--tw-placeholder-opacity));
}
.placeholder-zinc-500::placeholder{
  --tw-placeholder-opacity: 1;
  color: rgb(113 113 122 / var(--tw-placeholder-opacity));
}
.opacity-0{
  opacity: 0;
}
.opacity-100{
  opacity: 1;
}
.opacity-25{
  opacity: 0.25;
}
.opacity-50{
  opacity: 0.5;
}
.opacity-75{
  opacity: 0.75;
}
.shadow{
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-2xl{
  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-\\[0_8px_32px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.4\\)\\]{
  --tw-shadow: 0 8px 32px rgba(0,0,0,0.4);
  --tw-shadow-colored: 0 8px 32px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-inner{
  --tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-lg{
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-sm{
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-xl{
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-indigo-500\\/20{
  --tw-shadow-color: rgb(99 102 241 / 0.2);
  --tw-shadow: var(--tw-shadow-colored);
}
.shadow-purple-500\\/5{
  --tw-shadow-color: rgb(168 85 247 / 0.05);
  --tw-shadow: var(--tw-shadow-colored);
}
.outline{
  outline-style: solid;
}
.ring-1{
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-2{
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-amber-500\\/20{
  --tw-ring-color: rgb(245 158 11 / 0.2);
}
.ring-black{
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity));
}
.ring-indigo-400\\/60{
  --tw-ring-color: rgb(129 140 248 / 0.6);
}
.ring-white\\/5{
  --tw-ring-color: rgb(255 255 255 / 0.05);
}
.ring-opacity-5{
  --tw-ring-opacity: 0.05;
}
.blur{
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.blur-3xl{
  --tw-blur: blur(64px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.filter{
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-lg{
  --tw-backdrop-blur: blur(16px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-blur-md{
  --tw-backdrop-blur: blur(12px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-blur-sm{
  --tw-backdrop-blur: blur(4px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-filter{
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition{
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all{
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors{
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-opacity{
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform{
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-200{
  transition-duration: 200ms;
}
.duration-300{
  transition-duration: 300ms;
}
.duration-500{
  transition-duration: 500ms;
}
.duration-700{
  transition-duration: 700ms;
}
.ease-in-out{
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-out{
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
@tailwind forms;
.hover\\:-translate-y-1:hover{
  --tw-translate-y: -4px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.hover\\:translate-y-\\[-2px\\]:hover{
  --tw-translate-y: -2px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.hover\\:scale-105:hover{
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.hover\\:scale-\\[1\\.02\\]:hover{
  --tw-scale-x: 1.02;
  --tw-scale-y: 1.02;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.hover\\:rounded-full:hover{
  border-radius: 9999px;
}
.hover\\:border-amber-500\\/40:hover{
  border-color: rgb(245 158 11 / 0.4);
}
.hover\\:border-indigo-500\\/20:hover{
  border-color: rgb(99 102 241 / 0.2);
}
.hover\\:border-purple-500\\/20:hover{
  border-color: rgb(168 85 247 / 0.2);
}
.hover\\:border-purple-500\\/30:hover{
  border-color: rgb(168 85 247 / 0.3);
}
.hover\\:border-purple-500\\/50:hover{
  border-color: rgb(168 85 247 / 0.5);
}
.hover\\:border-red-500\\/30:hover{
  border-color: rgb(239 68 68 / 0.3);
}
.hover\\:border-zinc-600\\/50:hover{
  border-color: rgb(82 82 91 / 0.5);
}
.hover\\:bg-amber-500\\/30:hover{
  background-color: rgb(245 158 11 / 0.3);
}
.hover\\:bg-black:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}
.hover\\:bg-blue-300:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(147 197 253 / var(--tw-bg-opacity));
}
.hover\\:bg-blue-500:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}
.hover\\:bg-gray-100:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
.hover\\:bg-gray-50:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}
.hover\\:bg-green-500:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity));
}
.hover\\:bg-green-500\\/30:hover{
  background-color: rgb(34 197 94 / 0.3);
}
.hover\\:bg-green-600:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(22 163 74 / var(--tw-bg-opacity));
}
.hover\\:bg-indigo-500:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(99 102 241 / var(--tw-bg-opacity));
}
.hover\\:bg-indigo-700:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(67 56 202 / var(--tw-bg-opacity));
}
.hover\\:bg-purple-400:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(192 132 252 / var(--tw-bg-opacity));
}
.hover\\:bg-purple-500:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity));
}
.hover\\:bg-purple-500\\/20:hover{
  background-color: rgb(168 85 247 / 0.2);
}
.hover\\:bg-red-400:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(248 113 113 / var(--tw-bg-opacity));
}
.hover\\:bg-red-500\\/20:hover{
  background-color: rgb(239 68 68 / 0.2);
}
.hover\\:bg-red-500\\/30:hover{
  background-color: rgb(239 68 68 / 0.3);
}
.hover\\:bg-yellow-300:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(253 224 71 / var(--tw-bg-opacity));
}
.hover\\:bg-zinc-600:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(82 82 91 / var(--tw-bg-opacity));
}
.hover\\:bg-zinc-600\\/40:hover{
  background-color: rgb(82 82 91 / 0.4);
}
.hover\\:bg-zinc-600\\/50:hover{
  background-color: rgb(82 82 91 / 0.5);
}
.hover\\:bg-zinc-700:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(63 63 70 / var(--tw-bg-opacity));
}
.hover\\:bg-zinc-700\\/30:hover{
  background-color: rgb(63 63 70 / 0.3);
}
.hover\\:bg-zinc-700\\/40:hover{
  background-color: rgb(63 63 70 / 0.4);
}
.hover\\:bg-zinc-700\\/50:hover{
  background-color: rgb(63 63 70 / 0.5);
}
.hover\\:bg-zinc-700\\/60:hover{
  background-color: rgb(63 63 70 / 0.6);
}
.hover\\:bg-zinc-800:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity));
}
.hover\\:bg-zinc-800\\/50:hover{
  background-color: rgb(39 39 42 / 0.5);
}
.hover\\:bg-zinc-800\\/80:hover{
  background-color: rgb(39 39 42 / 0.8);
}
.hover\\:from-amber-300:hover{
  --tw-gradient-from: #fcd34d var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(252 211 77 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:from-amber-400\\/90:hover{
  --tw-gradient-from: rgb(251 191 36 / 0.9) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(251 191 36 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:from-emerald-400\\/90:hover{
  --tw-gradient-from: rgb(52 211 153 / 0.9) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(52 211 153 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:from-indigo-400:hover{
  --tw-gradient-from: #818cf8 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(129 140 248 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:from-purple-500:hover{
  --tw-gradient-from: #a855f7 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(168 85 247 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:from-purple-500\\/10:hover{
  --tw-gradient-from: rgb(168 85 247 / 0.1) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(168 85 247 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:from-yellow-400:hover{
  --tw-gradient-from: #facc15 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(250 204 21 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:from-zinc-600:hover{
  --tw-gradient-from: #52525b var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(82 82 91 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:from-zinc-600\\/80:hover{
  --tw-gradient-from: rgb(82 82 91 / 0.8) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(82 82 91 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:from-zinc-700:hover{
  --tw-gradient-from: #3f3f46 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(63 63 70 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.hover\\:to-amber-500\\/90:hover{
  --tw-gradient-to: rgb(245 158 11 / 0.9) var(--tw-gradient-to-position);
}
.hover\\:to-blue-500\\/10:hover{
  --tw-gradient-to: rgb(59 130 246 / 0.1) var(--tw-gradient-to-position);
}
.hover\\:to-emerald-500\\/90:hover{
  --tw-gradient-to: rgb(16 185 129 / 0.9) var(--tw-gradient-to-position);
}
.hover\\:to-indigo-500:hover{
  --tw-gradient-to: #6366f1 var(--tw-gradient-to-position);
}
.hover\\:to-orange-300:hover{
  --tw-gradient-to: #fdba74 var(--tw-gradient-to-position);
}
.hover\\:to-pink-500:hover{
  --tw-gradient-to: #ec4899 var(--tw-gradient-to-position);
}
.hover\\:to-purple-400:hover{
  --tw-gradient-to: #c084fc var(--tw-gradient-to-position);
}
.hover\\:to-yellow-300:hover{
  --tw-gradient-to: #fde047 var(--tw-gradient-to-position);
}
.hover\\:to-zinc-500:hover{
  --tw-gradient-to: #71717a var(--tw-gradient-to-position);
}
.hover\\:to-zinc-600:hover{
  --tw-gradient-to: #52525b var(--tw-gradient-to-position);
}
.hover\\:to-zinc-700\\/80:hover{
  --tw-gradient-to: rgb(63 63 70 / 0.8) var(--tw-gradient-to-position);
}
.hover\\:text-blue-300:hover{
  --tw-text-opacity: 1;
  color: rgb(147 197 253 / var(--tw-text-opacity));
}
.hover\\:text-gray-300:hover{
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}
.hover\\:text-gray-500:hover{
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.hover\\:text-gray-900:hover{
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}
.hover\\:text-purple-300:hover{
  --tw-text-opacity: 1;
  color: rgb(216 180 254 / var(--tw-text-opacity));
}
.hover\\:text-purple-400:hover{
  --tw-text-opacity: 1;
  color: rgb(192 132 252 / var(--tw-text-opacity));
}
.hover\\:text-red-300:hover{
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity));
}
.hover\\:text-red-400:hover{
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity));
}
.hover\\:text-white:hover{
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.hover\\:text-zinc-200:hover{
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity));
}
.hover\\:text-zinc-300:hover{
  --tw-text-opacity: 1;
  color: rgb(212 212 216 / var(--tw-text-opacity));
}
.hover\\:shadow-lg:hover{
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.hover\\:shadow-xl:hover{
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.hover\\:shadow-amber-400\\/25:hover{
  --tw-shadow-color: rgb(251 191 36 / 0.25);
  --tw-shadow: var(--tw-shadow-colored);
}
.hover\\:shadow-green-500\\/20:hover{
  --tw-shadow-color: rgb(34 197 94 / 0.2);
  --tw-shadow: var(--tw-shadow-colored);
}
.hover\\:shadow-purple-500\\/10:hover{
  --tw-shadow-color: rgb(168 85 247 / 0.1);
  --tw-shadow: var(--tw-shadow-colored);
}
.hover\\:shadow-purple-500\\/20:hover{
  --tw-shadow-color: rgb(168 85 247 / 0.2);
  --tw-shadow: var(--tw-shadow-colored);
}
.hover\\:shadow-purple-500\\/25:hover{
  --tw-shadow-color: rgb(168 85 247 / 0.25);
  --tw-shadow: var(--tw-shadow-colored);
}
.hover\\:shadow-purple-500\\/5:hover{
  --tw-shadow-color: rgb(168 85 247 / 0.05);
  --tw-shadow: var(--tw-shadow-colored);
}
.hover\\:shadow-yellow-400\\/25:hover{
  --tw-shadow-color: rgb(250 204 21 / 0.25);
  --tw-shadow: var(--tw-shadow-colored);
}
.hover\\:shadow-zinc-500\\/25:hover{
  --tw-shadow-color: rgb(113 113 122 / 0.25);
  --tw-shadow: var(--tw-shadow-colored);
}
.focus\\:border-indigo-500:focus{
  --tw-border-opacity: 1;
  border-color: rgb(99 102 241 / var(--tw-border-opacity));
}
.focus\\:border-purple-500\\/50:focus{
  border-color: rgb(168 85 247 / 0.5);
}
.focus\\:outline-none:focus{
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.focus\\:ring-1:focus{
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-2:focus{
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-blue-500:focus{
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));
}
.focus\\:ring-indigo-500:focus{
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity));
}
.focus\\:ring-indigo-600:focus{
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(79 70 229 / var(--tw-ring-opacity));
}
.focus\\:ring-purple-500\\/50:focus{
  --tw-ring-color: rgb(168 85 247 / 0.5);
}
.focus\\:ring-offset-2:focus{
  --tw-ring-offset-width: 2px;
}
.focus-visible\\:outline:focus-visible{
  outline-style: solid;
}
.focus-visible\\:outline-2:focus-visible{
  outline-width: 2px;
}
.focus-visible\\:outline-offset-2:focus-visible{
  outline-offset: 2px;
}
.focus-visible\\:outline-blue-600:focus-visible{
  outline-color: #2563eb;
}
.focus-visible\\:outline-green-600:focus-visible{
  outline-color: #16a34a;
}
.focus-visible\\:outline-indigo-600:focus-visible{
  outline-color: #4f46e5;
}
.focus-visible\\:outline-purple-600:focus-visible{
  outline-color: #9333ea;
}
.focus-visible\\:outline-red-600:focus-visible{
  outline-color: #dc2626;
}
.disabled\\:opacity-50:disabled{
  opacity: 0.5;
}
.group:hover .group-hover\\:block{
  display: block;
}
.group:hover .group-hover\\:rotate-180{
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.group:hover .group-hover\\:scale-105{
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.group:hover .group-hover\\:scale-110{
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.group:hover .group-hover\\:bg-black\\/0{
  background-color: rgb(0 0 0 / 0);
}
.group:hover .group-hover\\:from-amber-500{
  --tw-gradient-from: #f59e0b var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(245 158 11 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.group:hover .group-hover\\:from-blue-500{
  --tw-gradient-from: #3b82f6 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(59 130 246 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.group:hover .group-hover\\:from-green-500{
  --tw-gradient-from: #22c55e var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(34 197 94 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.group:hover .group-hover\\:from-indigo-500{
  --tw-gradient-from: #6366f1 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(99 102 241 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.group:hover .group-hover\\:from-rose-500{
  --tw-gradient-from: #f43f5e var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(244 63 94 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.group:hover .group-hover\\:to-cyan-500{
  --tw-gradient-to: #06b6d4 var(--tw-gradient-to-position);
}
.group:hover .group-hover\\:to-emerald-500{
  --tw-gradient-to: #10b981 var(--tw-gradient-to-position);
}
.group:hover .group-hover\\:to-orange-500{
  --tw-gradient-to: #f97316 var(--tw-gradient-to-position);
}
.group:hover .group-hover\\:to-pink-500{
  --tw-gradient-to: #ec4899 var(--tw-gradient-to-position);
}
.group:hover .group-hover\\:to-violet-500{
  --tw-gradient-to: #8b5cf6 var(--tw-gradient-to-position);
}
.group:hover .group-hover\\:text-amber-400{
  --tw-text-opacity: 1;
  color: rgb(251 191 36 / var(--tw-text-opacity));
}
.group:hover .group-hover\\:text-purple-300{
  --tw-text-opacity: 1;
  color: rgb(216 180 254 / var(--tw-text-opacity));
}
.group:hover .group-hover\\:text-purple-400{
  --tw-text-opacity: 1;
  color: rgb(192 132 252 / var(--tw-text-opacity));
}
.group:hover .group-hover\\:text-white{
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.group:hover .group-hover\\:text-zinc-200{
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity));
}
.group:hover .group-hover\\:text-zinc-300{
  --tw-text-opacity: 1;
  color: rgb(212 212 216 / var(--tw-text-opacity));
}
.group:hover .group-hover\\:opacity-100{
  opacity: 1;
}
@media (min-width: 640px){

  .sm\\:mt-0{
    margin-top: 0;
  }

  .sm\\:items-start{
    align-items: flex-start;
  }

  .sm\\:items-end{
    align-items: flex-end;
  }

  .sm\\:p-6{
    padding: 24px;
  }

  .sm\\:pl-0{
    padding-left: 0;
  }

  .sm\\:text-left{
    text-align: left;
  }
}
@media (min-width: 768px){

  .md\\:p-20{
    padding: 80px;
  }
}
`;

export default TAILWIND_CSS;
