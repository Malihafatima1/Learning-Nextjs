import Link from "next/link"

const categories=['tech','food'];


export default function BlogPage(){
    return(
        <div>
            <h1>Categories</h1>

            {categories.map((cat)=>(
                <div>
                    <Link href={`/blog/${cat}`}>{cat}</Link>
                </div>
            ))}
        </div>
    );
}
