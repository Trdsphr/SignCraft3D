import Link from "next/link";


export default function Home(){


return (

<main>


<header className="header">


<h1>
SignCraft 3D
</h1>


<nav>

<a href="#signs">
Signs
</a>


<a href="#how">
How It Works
</a>


<a href="#contact">
Contact
</a>


</nav>


</header>





<section className="hero">


<h2>
Custom Handmade House Signs
</h2>


<p>

Create a unique personalised house sign.
Design your sign in our iOS app and preview your creation before ordering.

</p>


<a className="button"
href="#">
Design Your Sign
</a>


</section>






<section id="signs">


<h2>
Our Sign Collection
</h2>


<div className="products">


<Card
title="Slate Signs"
text="Natural stone handmade appearance."
/>


<Card
title="Acrylic Signs"
text="Modern clean stylish designs."
/>


<Card
title="Metal Signs"
text="Premium outdoor signs."
/>


</div>


</section>






<section id="how">


<h2>
How It Works
</h2>


<p>
1. Open App
<br/>
2. Design Your Sign
<br/>
3. Order Online
</p>


</section>






<footer>

© 2026 SignCraft 3D

</footer>



</main>


)

}




function Card(
{
title,
text
}:{
title:string,
text:string
}

){

return (

<div className="card">

<h3>
{title}
</h3>

<p>
{text}
</p>


</div>

)

}
