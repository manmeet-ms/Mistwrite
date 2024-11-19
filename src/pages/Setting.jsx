import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArticleOutlined } from '@mui/icons-material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import BottomToolbar from '../components/BottomToolbar';
import Header from '../components/Header/Header';
import LogoutButton from '../components/Header/LogoutButton';

const Setting = () => {
    const authStatus = useSelector((state) => state.auth.status);
    const settingPageItemsStyle = 'w-4 h-4';
    const settingPageItems = [
        {
            name: 'About',
            icon: <ArticleOutlined sx={{ fontSize: 20 }} className={settingPageItemsStyle} />,
        },
    ];

    return (
        <>
            <Header />
      <section className="px-2">

            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link to="/">Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                        <BreadcrumbPage>Information</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <section className="container py-6">
                <div>
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Information</h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora in unde itaque quam eum officia harum. Quis voluptatibus enim possimus beatae aliquam impedit obcaecati odio. 
                    </p>
                    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">what was the ned of it?</h3>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        The king thought long and hard, and finally came up with{' '}
                        <a href="#" className="font-medium text-primary underline underline-offset-4">
                            a brilliant plan
                        </a>
                        : he would tax the jokes in the kingdom.
                    </p>
                    <blockquote className="mt-6 border-l-2 pl-6 italic">"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."</blockquote>
                    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">problems occured</h3>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">The king's subjects were not amused. They grumbled and complained, but the king was firm:</p>
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                        <li>1st level of puns: 5 gold coins</li>
                        <li>2nd level of jokes: 10 gold coins</li>
                        <li>3rd level of one-liners : 20 gold coins</li>
                    </ul>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester named Jokester.
                    </p>
                    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">texh stack used with technilogies</h3>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop
                        Jokester.
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn't help but laugh. And once they started laughing, they couldn't stop.
                    </p>
                    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">how may days does it took</h3>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns again, and soon the entire kingdom was in on the joke.</p>
                    <div className="my-6 w-full overflow-y-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="m-0 border-t p-0 even:bg-muted">
                                    <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">King's Treasury</th>
                                    <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">People's happiness</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="m-0 border-t p-0 even:bg-muted">
                                    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Empty</td>
                                    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Overflowing</td>
                                </tr>
                                <tr className="m-0 border-t p-0 even:bg-muted">
                                    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Modest</td>
                                    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Satisfied</td>
                                </tr>
                                <tr className="m-0 border-t p-0 even:bg-muted">
                                    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Full</td>
                                    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Ecstatic</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax. Jokester was declared a hero, and the kingdom lived happily ever after.
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">The moral of the story is: never underestimate the power of a good laugh and always be careful of bad ideas.</p>
                </div>
                <div className="flex flex-col space-y-2 justify-start items-start">
           
           
                    wheer it is hosted credit to give to the tech
                    <br />
                    feeling good when it <br />
                    {settingPageItems.map((item) => (
                        <div className="flex border-b border-accent container py-2 text-base justify-between">
                            <span className="">
                                {item.icon} {item.name}
                            </span>
                            {/* <ChevronRightSharp /> */}
                        </div>
                    ))}
                    {/* <LogoutButton className="container bg-primary"/> */}
                    {/* {authStatus && <LogoutButton />} */}
                </div>
            </section>
            </section>
            
            <BottomToolbar />
        </>
    );
};

export default Setting;
