## Menu header
### HTML

```
<div class="card-box h-[100vh] w-[100vw] flex-col flex bg-slate-900 items-center justify-center">
  <div class="card-wrapper h-20 w-56 bg-orange-50 shadow-glow-gradient flex justify-center items-center overflow-hidden">
    <div class="card-content absolute flex h-16 w-52 bg-black justify-between rounded-full items-center">
      <div class="circle-box border-2 border-black ">
        <!-- The gradient will rotate only within this circle -->
      </div>
      <!-- <p class="text-white ml-4">Hello</p> -->
    </div>
  </div>
</div>

```

### CSS

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .card-wrapper {
    @apply relative bg-slate-600 rounded-full;
  }

  .card-wrapper::before {
    background: conic-gradient(
      #f72585,
      #b5179e,
      #7209b7,
      #560bad,
      #3a0ca3,
      #3f37c9,
      #4361ee,
      #4895ef,
      #4cc9f0,
      transparent 110%
    );
    @apply absolute h-[350%] w-[200%] content-[''] animate-boarder-spin;
  }

  .circle-box {
    @apply relative flex h-16 w-16 overflow-hidden bg-slate-50  rounded-full;
  }

  .circle-box::before {
    background: conic-gradient(
      #f72585,
      #b5179e,
      #7209b7,
      #560bad,
      #3a0ca3,
      #3f37c9,
      #4361ee,
      #4895ef,
      #4cc9f0,
      transparent 110%
    );
    clip-path: circle(100%);

    @apply absolute h-[380%] w-[380%] left-[-25%] top-[-140%] content-[''] animate-boarder-spin;
  }
}

```

### Config
```
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
       boxShadow: {
        'glow-gradient': '0 0 10px #f72585, 0 0 20px #b5179e, 0 0 30px #7209b7, 0 0 40px #560bad, 0 0 50px #3a0ca3',
      },
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          }
        }
      },
      animation: {
        'boarder-spin': 'border-spin 5s linear infinite'
      }
    },
  },
  plugins: [],
}

```



--------

### HTML

```
<div class="card-box h-[100vh] w-[100vw] flex-col flex bg-slate-900 items-center justify-center">
  <div class="card-wrapper h-20 w-[40rem] bg-orange-50 shadow-glow-gradient flex justify-center items-center ">
    <div class="card-content absolute flex h-16 w-[39rem] bg-black justify-between rounded-full items-center">
      <div class="circle-box border-2 border-black ">
        <!-- The gradient will rotate only within this circle -->
      </div>
      <!-- <p class="text-white ml-4">Hello</p> -->
    </div>
  </div>
</div>

```

### CSS
```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .card-wrapper {
    @apply relative bg-slate-600 overflow-hidden rounded-full;
  }

  .card-wrapper::before {
    background: conic-gradient(
      #f72585,
      #b5179e,
      #7209b7,
      #560bad,
      #3a0ca3,
      #3f37c9,
      #4361ee,
      #4895ef,
      #4cc9f0,
      transparent 110%
    );
    @apply absolute h-[800%] w-[190%] content-[''] animate-boarder-spin;
  }

  .circle-box {
    @apply relative flex h-16 w-16 bg-slate-50 overflow-hidden rounded-full;
  }

  .circle-box::before {
    background: conic-gradient(
      #f72585,
      #b5179e,
      #7209b7,
      #560bad,
      #3a0ca3,
      #3f37c9,
      #4361ee,
      #4895ef,
      #4cc9f0,
      transparent 120%
    );
    /* Apply Tailwind classes for width/height */
    @apply absolute h-[50rem] w-[85rem] top-[-23rem] left-[-22rem] content-[''] animate-boarder-spin;
    

  }
}

```

### CONF

```
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
       boxShadow: {
        'glow-gradient': '0 0 10px #f72585, 0 0 20px #b5179e, 0 0 30px #7209b7, 0 0 40px #560bad, 0 0 50px #3a0ca3',
      },
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          }
        }
      },
      animation: {
        'boarder-spin': 'border-spin 5s linear infinite'
      }
    },
  },
  plugins: [],
}

```


### HTML
```
<div class="flex h-[100vh] w-[100vw] items-center justify-evenly bg-slate-700">
  <div class="flex h-24 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
  <div class="flex h-24 w-1 rounded-t-full bg-[#b5179d] hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
  <div class="flex h-24 w-1 rounded-t-full bg-[#7209b7] hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
  <div class="flex h-24 w-1 rounded-t-full bg-[#560bad] hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
  <div class="flex h-24 w-1 rounded-t-full bg-[#3a0ca3] hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
  <div class="flex h-24 w-1 rounded-t-full bg-[#3f37c9] hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
  <div class="flex h-24 w-1 rounded-t-full bg-[#4361ee] hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
  <div class="flex h-24 w-1 rounded-t-full bg-[#4895ef] hover:shadow-[0_0_20px_7px_rgba(72,149,239,0.7)]"></div>
  <div class="flex h-24 w-1 rounded-t-full bg-[#4cc9f0] hover:shadow-[0_0_20px_7px_rgba(76,201,240,0.7)]"></div>
</div>

```



```
<div class="flex h-[100vh] w-[100vw] items-center justify-evenly bg-slate-700">
  <div class="group relative flex h-24 w-1 rounded-t-full bg-[#f72585] drop-shadow-md hover:drop-shadow-xl">
    <div class="absolute -inset-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    <div class="absolute inset-0 rounded-t-full bg-[#f72585] shadow-none transition-shadow duration-300 group-hover:shadow-[0_0_15px_5px_rgba(247,37,133,0.7)]"></div>
  </div>
  <div class="group relative flex h-24 w-1 rounded-t-full bg-[#b5179d]">
    <div class="absolute -inset-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    <div class="absolute inset-0 rounded-t-full bg-[#b5179d] shadow-none transition-shadow duration-300 group-hover:shadow-[0_0_20px_7px_rgba(181,23,157,0.8)]"></div>
  </div>
  <div class="group relative flex h-24 w-1 rounded-t-full bg-[#7209b7]">
    <div class="absolute -inset-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    <div class="absolute inset-0 rounded-t-full bg-[#7209b7] shadow-none transition-shadow duration-300 group-hover:shadow-[0_0_20px_7px_rgba(114,9,183,0.7)]"></div>
  </div>
  <div class="group relative flex h-24 w-1 rounded-t-full bg-[#560bad]">
    <div class="absolute -inset-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    <div class="absolute inset-0 rounded-t-full bg-[#560bad] shadow-none transition-shadow duration-300 group-hover:shadow-[0_0_20px_7px_rgba(86,11,173,0.7)]"></div>
  </div>
  <div class="group relative flex h-24 w-1 rounded-t-full bg-[#3a0ca3]">
    <div class="absolute -inset-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    <div class="absolute inset-0 rounded-t-full bg-[#3a0ca3] shadow-none transition-shadow duration-300 group-hover:shadow-[0_0_20px_7px_rgba(58,12,163,0.7)]"></div>
  </div>
  <div class="group relative flex h-24 w-1 rounded-t-full bg-[#3f37c9]">
    <div class="absolute -inset-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    <div class="absolute inset-0 rounded-t-full bg-[#3f37c9] shadow-none transition-shadow duration-300 group-hover:shadow-[0_0_20px_7px_rgba(63,55,201,0.7)]"></div>
  </div>
  <div class="group relative flex h-24 w-1 rounded-t-full bg-[#4361ee]">
    <div class="absolute -inset-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    <div class="absolute inset-0 rounded-t-full bg-[#4361ee] shadow-none transition-shadow duration-300 group-hover:shadow-[0_0_20px_7px_rgba(67,97,238,0.7)]"></div>
  </div>
  <div class="group relative flex h-24 w-1 rounded-t-full bg-[#4895ef]">
    <div class="absolute -inset-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    <div class="absolute inset-0 rounded-t-full bg-[#4895ef] shadow-none transition-shadow duration-300 group-hover:shadow-[0_0_20px_7px_rgba(72,149,239,0.7)]"></div>
  </div>
  <div class="group relative flex h-24 w-1 rounded-t-full bg-[#4cc9f0]">
    <div class="absolute -inset-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    <div class="absolute inset-0 rounded-t-full bg-[#4cc9f0] shadow-none transition-shadow duration-300 group-hover:shadow-[0_0_20px_7px_rgba(76,201,240,0.7)]"></div>
  </div>
</div>

```