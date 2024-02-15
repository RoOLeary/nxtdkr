import Link from "next/link"; 

export default function Page(){
	return(
		<>
			<h1 className="w-full h-full font-black">I am an info bit. And in case I didnt already mention, I hate Docker</h1>
			<br />
			<Link href="/">Back</Link>
		</>
	); 
}

