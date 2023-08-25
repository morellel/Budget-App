
import {Container} from "@/components/Container";
import { endpoint } from '@/utils/endpoint';
import Link from 'next/link';
import Image from 'next/image';
import {getAllPlannedExpenses} from "@/lib/plannedExpenses";

//waits for the response from getAllPlannedExpenses() and store the result in data variable
const data = await getAllPlannedExpenses()

export default function Home() { //React component defined as asynchronous function called Home. Renders UI
  return (
        <main>
            <Container >

                {/* map each expense item inside the container */}
                {data?.plannedExpenses?.map(item => {
                    return (
                        <Link
                            href={`/plannedExpenses/${item.slug}`} /* create a link to each expense page */
                            key={item.name}
                        >
                            <Image
                                src="./logo.png"
                                alt=""
                                width={250}
                                height={150}
                            />
                        </Link>
                    )
                })}
            </Container>
        </main>
    )
}
