
import { Badge } from '@/components/ui/badge';



import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Star,BookA, ExternalLink, ListTree ,CircleArrowRight, Files, Settings,Book, Menu, Sunset, Trees, Zap } from 'lucide-react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button, buttonVariants } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import AutoScroll from 'embla-carousel-auto-scroll';
import React from 'react';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const logos = [
    {
        id: 'logo-1',
        description: 'Logo 1',
        image: 'https://www.shadcnblocks.com/images/block/logos/astro.svg',
    },
    {
        id: 'logo-2',
        description: 'Logo 2',
        image: 'https://www.shadcnblocks.com/images/block/logos/figma.svg',
    },
    {
        id: 'logo-3',
        description: 'Logo 3',
        image: 'https://www.shadcnblocks.com/images/block/logos/nextjs.svg',
    },
    {
        id: 'logo-4',
        description: 'Logo 4',
        image: 'https://www.shadcnblocks.com/images/block/logos/react.png',
    },
    {
        id: 'logo-5',
        description: 'Logo 5',
        image: 'https://www.shadcnblocks.com/images/block/logos/shadcn-ui.svg',
    },
    {
        id: 'logo-6',
        description: 'Logo 6',
        image: 'https://www.shadcnblocks.com/images/block/logos/supabase.svg',
    },
    {
        id: 'logo-7',
        description: 'Logo 7',
        image: 'https://www.shadcnblocks.com/images/block/logos/tailwind.svg',
    },
    {
        id: 'logo-8',
        description: 'Logo 8',
        image: 'https://www.shadcnblocks.com/images/block/logos/vercel.svg',
    },
];

const sections = [
    {
        title: 'Product',
        links: [
            { name: 'Overview', href: '#' },
            { name: 'Pricing', href: '#' },
            { name: 'Marketplace', href: '#' },
            { name: 'Features', href: '#' },
        ],
    },
    {
        title: 'Company',
        links: [
            { name: 'About', href: '#' },
            { name: 'Team', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Careers', href: '#' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { name: 'Help', href: '#' },
            { name: 'Sales', href: '#' },
            { name: 'Advertise', href: '#' },
            { name: 'Privacy', href: '#' },
        ],
    },
];
const subMenuItemsOne = [
    {
        title: 'Blog',
        description: 'The latest industry news, updates, and info',
        icon: <ListTree className="size-5 shrink-0" />,
    },
    {
        title: 'Compnay',
        description: 'Our mission is to innovate and empower the world',
        icon: <ListTree className="size-5 shrink-0" />,
    },
    {
        title: 'Careers',
        description: 'Browse job listing and discover our workspace',
        icon: <ListTree className="size-5 shrink-0" />,
    },
    {
        title: 'Support',
        description: 'Get in touch with our support team or visit our community forums',
        icon: <ListTree className="size-5 shrink-0" />,
    },
];

const subMenuItemsTwo = [
    {
        title: 'Help Center',
        description: 'Get all the answers you need right here',
        icon: <ListTree className="size-5 shrink-0" />,
    },
    {
        title: 'Contact Us',
        description: 'We are here to help you with any questions you have',
        icon: <ListTree className="size-5 shrink-0" />,
    },
    {
        title: 'Status',
        description: 'Check the current status of our services and APIs',
        icon: <ListTree className="size-5 shrink-0" />,
    },
    {
        title: 'Terms of Service',
        description: 'Our terms and conditions for using our services',
        icon: <ListTree className="size-5 shrink-0" />,
    },
];

const LandingPage = () => {
    return (
        <>
            <section className="px-4">
                <section className={` py-6 z-40 sticky top-0`}>
                    <div className="container">
                        <nav className="hidden justify-between lg:flex">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <img src="https://www.shadcnblocks.com/images/block/block-1.svg" className="w-8" alt="logo" />
                                    <span className="text-xl font-bold">Shadcn Blocks</span>
                                </div>
                                <div className="flex items-center">
                                    <a
                                        className={cn(
                                            'text-muted-foreground',
                                            navigationMenuTriggerStyle,
                                            buttonVariants({
                                                variant: 'ghost',
                                            }),
                                        )}
                                        href="#">
                                        Home
                                    </a>
                                    <NavigationMenu>
                                        <NavigationMenuList>
                                            <NavigationMenuItem className="text-muted-foreground">
                                                <NavigationMenuTrigger>
                                                    <span>Products</span>
                                                </NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <ul className="w-80 p-3">
                                                        <NavigationMenuLink>
                                                            {subMenuItemsOne.map((item, idx) => (
                                                                <li key={idx}>
                                                                    <a
                                                                        className={cn(
                                                                            'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                                                        )}
                                                                        href="#">
                                                                        {item.icon}
                                                                        <div>
                                                                            <div className="text-sm font-semibold">{item.title}</div>
                                                                            <p className="text-sm leading-snug text-muted-foreground">{item.description}</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </NavigationMenuLink>
                                                    </ul>
                                                </NavigationMenuContent>
                                            </NavigationMenuItem>
                                            <NavigationMenuItem className="text-muted-foreground">
                                                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <ul className="w-80 p-3">
                                                        <NavigationMenuLink>
                                                            {subMenuItemsTwo.map((item, idx) => (
                                                                <li key={idx}>
                                                                    <a
                                                                        className={cn(
                                                                            'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                                                        )}
                                                                        href="#">
                                                                        {item.icon}
                                                                        <div>
                                                                            <div className="text-sm font-semibold">{item.title}</div>
                                                                            <p className="text-sm leading-snug text-muted-foreground">{item.description}</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </NavigationMenuLink>
                                                    </ul>
                                                </NavigationMenuContent>
                                            </NavigationMenuItem>
                                        </NavigationMenuList>
                                    </NavigationMenu>

                                    <a
                                        className={cn(
                                            'text-muted-foreground',
                                            navigationMenuTriggerStyle,
                                            buttonVariants({
                                                variant: 'ghost',
                                            }),
                                        )}
                                        href="#">
                                        Pricing
                                    </a>
                                    <a
                                        className={cn(
                                            'text-muted-foreground',
                                            navigationMenuTriggerStyle,
                                            buttonVariants({
                                                variant: 'ghost',
                                            }),
                                        )}
                                        href="#">
                                        Blog
                                    </a>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button variant={'outline'}>Log in</Button>
                                <Button>Sign up</Button>
                            </div>
                        </nav>
                        <div className="block lg:hidden">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="https://www.shadcnblocks.com/images/block/block-1.svg" className="w-8" alt="logo" />
                                    <span className="text-xl font-bold">Shadcn Blocks</span>
                                </div>
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant={'outline'} size={'icon'}>
                                            <Menu className="size-4" />
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent className="overflow-y-auto">
                                        <SheetHeader>
                                            <SheetTitle>
                                                <div className="flex items-center gap-2">
                                                    <img src="https://www.shadcnblocks.com/images/block/block-1.svg" className="w-8" alt="logo" />
                                                    <span className="text-xl font-bold">Shadcn Blocks</span>
                                                </div>
                                            </SheetTitle>
                                        </SheetHeader>
                                        <div className="my-8 flex flex-col gap-4">
                                            <a href="#" className="font-semibold">
                                                Home
                                            </a>
                                            <Accordion type="single" collapsible className="w-full">
                                                <AccordionItem value="products" className="border-b-0">
                                                    <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">Products</AccordionTrigger>
                                                    <AccordionContent className="mt-2">
                                                        {subMenuItemsOne.map((item, idx) => (
                                                            <a
                                                                key={idx}
                                                                className={cn(
                                                                    'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                                                )}
                                                                href="#">
                                                                {item.icon}
                                                                <div>
                                                                    <div className="text-sm font-semibold">{item.title}</div>
                                                                    <p className="text-sm leading-snug text-muted-foreground">{item.description}</p>
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </AccordionContent>
                                                </AccordionItem>
                                                <AccordionItem value="resources" className="border-b-0">
                                                    <AccordionTrigger className="py-0 font-semibold hover:no-underline">Resources</AccordionTrigger>
                                                    <AccordionContent className="mt-2">
                                                        {subMenuItemsTwo.map((item, idx) => (
                                                            <a
                                                                key={idx}
                                                                className={cn(
                                                                    'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                                                )}
                                                                href="#">
                                                                {item.icon}
                                                                <div>
                                                                    <div className="text-sm font-semibold">{item.title}</div>
                                                                    <p className="text-sm leading-snug text-muted-foreground">{item.description}</p>
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                            <a href="#" className="font-semibold">
                                                Pricing
                                            </a>
                                            <a href="#" className="font-semibold">
                                                Blog
                                            </a>
                                        </div>
                                        <div className="border-t pt-4">
                                            <div className="grid grid-cols-2 justify-start">
                                                <a
                                                    className={cn(
                                                        buttonVariants({
                                                            variant: 'ghost',
                                                        }),
                                                        'justify-start text-muted-foreground',
                                                    )}
                                                    href="#">
                                                    Press
                                                </a>
                                                <a
                                                    className={cn(
                                                        buttonVariants({
                                                            variant: 'ghost',
                                                        }),
                                                        'justify-start text-muted-foreground',
                                                    )}
                                                    href="#">
                                                    Contact
                                                </a>
                                                <a
                                                    className={cn(
                                                        buttonVariants({
                                                            variant: 'ghost',
                                                        }),
                                                        'justify-start text-muted-foreground',
                                                    )}
                                                    href="#">
                                                    Imprint
                                                </a>
                                                <a
                                                    className={cn(
                                                        buttonVariants({
                                                            variant: 'ghost',
                                                        }),
                                                        'justify-start text-muted-foreground',
                                                    )}
                                                    href="#">
                                                    Sitemap
                                                </a>
                                                <a
                                                    className={cn(
                                                        buttonVariants({
                                                            variant: 'ghost',
                                                        }),
                                                        'justify-start text-muted-foreground',
                                                    )}
                                                    href="#">
                                                    Legal
                                                </a>
                                                <a
                                                    className={cn(
                                                        buttonVariants({
                                                            variant: 'ghost',
                                                        }),
                                                        'justify-start text-muted-foreground',
                                                    )}
                                                    href="#">
                                                    Cookie Settings
                                                </a>
                                            </div>
                                            <div className="mt-2 flex flex-col gap-3">
                                                <Button variant={'outline'}>Log in</Button>
                                                <Button>Sign up</Button>
                                            </div>
                                        </div>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative overflow-hidden py--32 py-12">
                    <div className="container">
                        <div className="absolute inset-x-0 top-0 z-10 flex size-full items-center justify-center opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1125">
                                <mask id="b" width={2000} height={1125} x={0} y={0}>
                                    <path fill="url(#a)" d="M0 0h2000v1125H0z" />
                                </mask>
                                <path fill="none" d="M0 0h2000v1125H0z" />
                                <g
                                    stroke="#eeeeee"
                                    strokeWidth={0.6}
                                    mask="url(#b)"
                                    style={{
                                        transformOrigin: 'center center',
                                        opacity: 0.12,
                                    }}>
                                    <path fill="none" d="M0 0h111.111v111.111H0zm111.111 0h111.111v111.111H111.111zm111.111 0h111.111v111.111H222.222zm111.111 0h111.111v111.111H333.333z" />
                                    <path fill="#eeeeeeaf" d="M444.444 0h111.111v111.111H444.444z" />
                                    <path
                                        fill="none"
                                        d="M555.556 0h111.111v111.111H555.556zm111.111 0h111.111v111.111H666.667zm111.111 0h111.111v111.111H777.778zm111.111 0H1000v111.111H888.889zM1000 0h111.111v111.111H1000zm111.111 0h111.111v111.111h-111.111z"
                                    />
                                    <path fill="none" d="M1222.222 0h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1444.444 0h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeee0b" d="M1555.556 0h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1666.667 0h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeeed1" d="M1777.778 0h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1888.889 0H2000v111.111h-111.111zM0 111.111h111.111v111.111H0z" />
                                    <path fill="#eeeeee1c" d="M111.111 111.111h111.111v111.111H111.111z" />
                                    <path fill="none" d="M222.222 111.111h111.111v111.111H222.222z" />
                                    <path fill="#eeeeee2b" d="M333.333 111.111h111.111v111.111H333.333z" />
                                    <path fill="#eeeeeec2" d="M444.444 111.111h111.111v111.111H444.444z" />
                                    <path fill="none" d="M555.556 111.111h111.111v111.111H555.556z" />
                                    <path fill="#eeeeeeef" d="M666.667 111.111h111.111v111.111H666.667z" />
                                    <path fill="none" d="M777.778 111.111h111.111v111.111H777.778zm111.111 0H1000v111.111H888.889z" />
                                    <path fill="#eeeeee77" d="M1000 111.111h111.111v111.111H1000z" />
                                    <path fill="#eeeeeeea" d="M1111.111 111.111h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1222.222 111.111h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1444.444 111.111h111.111v111.111h-111.111zm111.112 0h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1666.667 111.111h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1888.889 111.111H2000v111.111h-111.111zM0 222.222h111.111v111.111H0zm111.111 0h111.111v111.111H111.111z" />
                                    <path fill="#eeeeeed1" d="M222.222 222.222h111.111v111.111H222.222z" />
                                    <path fill="none" d="M333.333 222.222h111.111v111.111H333.333zm111.111 0h111.111v111.111H444.444zm111.112 0h111.111v111.111H555.556zm111.111 0h111.111v111.111H666.667z" />
                                    <path fill="#eeeeee04" d="M777.778 222.222h111.111v111.111H777.778z" />
                                    <path fill="#eeeeee1f" d="M888.889 222.222H1000v111.111H888.889z" />
                                    <path fill="none" d="M1000 222.222h111.111v111.111H1000z" />
                                    <path fill="#eeeeeeb1" d="M1111.111 222.222h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1222.222 222.222h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1444.444 222.222h111.111v111.111h-111.111zm111.112 0h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1666.667 222.222h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeee47" d="M1888.889 222.222H2000v111.111h-111.111z" />
                                    <path fill="#eeeeeed0" d="M0 333.333h111.111v111.111H0z" />
                                    <path fill="#eeeeeea6" d="M111.111 333.333h111.111v111.111H111.111z" />
                                    <path fill="none" d="M222.222 333.333h111.111v111.111H222.222z" />
                                    <path fill="#eeeeeebd" d="M333.333 333.333h111.111v111.111H333.333z" />
                                    <path fill="none" d="M444.444 333.333h111.111v111.111H444.444z" />
                                    <path fill="#eeeeee72" d="M555.556 333.333h111.111v111.111H555.556z" />
                                    <path fill="none" d="M666.667 333.333h111.111v111.111H666.667zm111.111 0h111.111v111.111H777.778zm111.111 0H1000v111.111H888.889z" />
                                    <path fill="#eeeeee58" d="M1000 333.333h111.111v111.111H1000z" />
                                    <path fill="none" d="M1111.111 333.333h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1222.222 333.333h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1444.444 333.333h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeeed7" d="M1555.556 333.333h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeee57" d="M1666.667 333.333h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeee75" d="M1777.778 333.333h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeeebf" d="M1888.889 333.333H2000v111.111h-111.111z" />
                                    <path fill="#eeeeee16" d="M0 444.444h111.111v111.111H0z" />
                                    <path
                                        fill="none"
                                        d="M111.111 444.444h111.111v111.111H111.111zm111.111 0h111.111v111.111H222.222zm111.111 0h111.111v111.111H333.333zm111.111 0h111.111v111.111H444.444zm111.112 0h111.111v111.111H555.556zm111.111 0h111.111v111.111H666.667zm111.111 0h111.111v111.111H777.778z"
                                    />
                                    <path fill="#eeeeee5b" d="M888.889 444.444H1000v111.111H888.889z" />
                                    <path fill="none" d="M1000 444.444h111.111v111.111H1000zm111.111 0h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeeefb" d="M1222.222 444.444h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1333.333 444.444h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1444.444 444.444h111.111v111.111h-111.111zm111.112 0h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1666.667 444.444h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1888.889 444.444H2000v111.111h-111.111zM0 555.556h111.111v111.111H0z" />
                                    <path fill="#eeeeee9e" d="M111.111 555.556h111.111v111.111H111.111z" />
                                    <path fill="#eeeeeef4" d="M222.222 555.556h111.111v111.111H222.222z" />
                                    <path fill="none" d="M333.333 555.556h111.111v111.111H333.333zm111.111 0h111.111v111.111H444.444zm111.112 0h111.111v111.111H555.556zm111.111 0h111.111v111.111H666.667z" />
                                    <path fill="#eeeeee87" d="M777.778 555.556h111.111v111.111H777.778z" />
                                    <path fill="none" d="M888.889 555.556H1000v111.111H888.889zm111.111 0h111.111v111.111H1000zm111.111 0h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1222.222 555.556h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeeed4" d="M1444.444 555.556h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1555.556 555.556h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeeeec" d="M1666.667 555.556h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1777.778 555.556h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeeece" d="M1888.889 555.556H2000v111.111h-111.111z" />
                                    <path fill="none" d="M0 666.667h111.111v111.111H0zm111.111 0h111.111v111.111H111.111zm111.111 0h111.111v111.111H222.222z" />
                                    <path fill="#eeeeeebd" d="M333.333 666.667h111.111v111.111H333.333z" />
                                    <path fill="#eeeeeec7" d="M444.444 666.667h111.111v111.111H444.444z" />
                                    <path fill="#eeeeee2a" d="M555.556 666.667h111.111v111.111H555.556z" />
                                    <path fill="#eeeeee24" d="M666.667 666.667h111.111v111.111H666.667z" />
                                    <path fill="#eeeeeedd" d="M777.778 666.667h111.111v111.111H777.778z" />
                                    <path fill="none" d="M888.889 666.667H1000v111.111H888.889zm111.111 0h111.111v111.111H1000zm111.111 0h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeee9a" d="M1222.222 666.667h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1333.333 666.667h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1444.444 666.667h111.111v111.111h-111.111zm111.112 0h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1666.667 666.667h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeee12" d="M1888.889 666.667H2000v111.111h-111.111z" />
                                    <path fill="none" d="M0 777.778h111.111v111.111H0z" />
                                    <path fill="#eeeeee68" d="M111.111 777.778h111.111v111.111H111.111z" />
                                    <path fill="#eeeeee69" d="M222.222 777.778h111.111v111.111H222.222z" />
                                    <path
                                        fill="none"
                                        d="M333.333 777.778h111.111v111.111H333.333zm111.111 0h111.111v111.111H444.444zm111.112 0h111.111v111.111H555.556zm111.111 0h111.111v111.111H666.667zm111.111 0h111.111v111.111H777.778zm111.111 0H1000v111.111H888.889z"
                                    />
                                    <path fill="#eeeeee46" d="M1000 777.778h111.111v111.111H1000z" />
                                    <path fill="none" d="M1111.111 777.778h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeee0d" d="M1222.222 777.778h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeeeda" d="M1333.333 777.778h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeee60" d="M1444.444 777.778h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1555.556 777.778h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeee09" d="M1666.667 777.778h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeee2d" d="M1777.778 777.778h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1888.889 777.778H2000v111.111h-111.111zM0 888.889h111.111V1000H0z" />
                                    <path fill="#eeeeee1b" d="M111.111 888.889h111.111V1000H111.111z" />
                                    <path fill="#eeeeee05" d="M222.222 888.889h111.111V1000H222.222z" />
                                    <path fill="#eeeeee5d" d="M333.333 888.889h111.111V1000H333.333z" />
                                    <path fill="none" d="M444.444 888.889h111.111V1000H444.444z" />
                                    <path fill="#eeeeeefd" d="M555.556 888.889h111.111V1000H555.556z" />
                                    <path fill="none" d="M666.667 888.889h111.111V1000H666.667z" />
                                    <path fill="#eeeeee14" d="M777.778 888.889h111.111V1000H777.778z" />
                                    <path fill="#eeeeee2b" d="M888.889 888.889H1000V1000H888.889z" />
                                    <path fill="#eeeeee11" d="M1000 888.889h111.111V1000H1000zm111.111 0h111.111V1000h-111.111z" />
                                    <path fill="none" d="M1222.222 888.889h111.111V1000h-111.111z" />
                                    <path fill="#eeeeeecb" d="M1333.333 888.889h111.111V1000h-111.111z" />
                                    <path fill="none" d="M1444.444 888.889h111.111V1000h-111.111zm111.112 0h111.111V1000h-111.111z" />
                                    <path fill="none" d="M1666.667 888.889h111.111V1000h-111.111z" />
                                    <path fill="#eeeeee2f" d="M1777.778 888.889h111.111V1000h-111.111z" />
                                    <path fill="#eeeeeeec" d="M1888.889 888.889H2000V1000h-111.111z" />
                                    <path
                                        fill="none"
                                        d="M0 1000h111.111v111.111H0zm111.111 0h111.111v111.111H111.111zm111.111 0h111.111v111.111H222.222zm111.111 0h111.111v111.111H333.333zm111.111 0h111.111v111.111H444.444zm111.112 0h111.111v111.111H555.556z"
                                    />
                                    <path fill="#eeeeeef0" d="M666.667 1000h111.111v111.111H666.667z" />
                                    <path fill="none" d="M777.778 1000h111.111v111.111H777.778zm111.111 0H1000v111.111H888.889z" />
                                    <path fill="#eeeeeef0" d="M1000 1000h111.111v111.111H1000z" />
                                    <path fill="#eeeeeea8" d="M1111.111 1000h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeeecf" d="M1222.222 1000h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1333.333 1000h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1444.444 1000h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeeede" d="M1555.556 1000h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeee29" d="M1666.667 1000h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1777.778 1000h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1888.889 1000H2000v111.111h-111.111z" />
                                    <path fill="#eeeeeefd" d="M0 1111.111h111.111v111.111H0z" />
                                    <path fill="#eeeeee48" d="M111.111 1111.111h111.111v111.111H111.111z" />
                                    <path fill="none" d="M222.222 1111.111h111.111v111.111H222.222zm111.111 0h111.111v111.111H333.333zm111.111 0h111.111v111.111H444.444zm111.112 0h111.111v111.111H555.556zm111.111 0h111.111v111.111H666.667z" />
                                    <path fill="#eeeeee6d" d="M777.778 1111.111h111.111v111.111H777.778z" />
                                    <path fill="none" d="M888.889 1111.111H1000v111.111H888.889zm111.111 0h111.111v111.111H1000z" />
                                    <path fill="#eeeeeee4" d="M1111.111 1111.111h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1222.222 1111.111h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1444.444 1111.111h111.111v111.111h-111.111zm111.112 0h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeeeb8" d="M1666.667 1111.111h111.111v111.111h-111.111z" />
                                    <path fill="none" d="M1777.778 1111.111h111.111v111.111h-111.111z" />
                                    <path fill="#eeeeeeea" d="M1888.889 1111.111H2000v111.111h-111.111z" />
                                </g>
                                <defs>
                                    <radialGradient id="a">
                                        <stop offset={0} stopColor="#fff" />
                                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="mx-auto flex max-w-5xl flex-col items-center">
                            <div className="z-10 flex flex-col items-center gap-6 text-center">
                                <img src="https://www.shadcnblocks.com/images/block/block-1.svg" alt="logo" className="h-16" />
                                <Badge variant="outline">UI Blocks</Badge>
                                <div>
                                    <h1 className="mb-6 text-pretty text-2xl font-bold lg:text-5xl">Build your next project with Blocks</h1>
                                    <p className="text-muted-foreground lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.</p>
                                </div>
                                <div className="mt-4 flex justify-center gap-2">
                                    <Button>Get Started</Button>
                                    <Button variant="outline">
                                        Learn more <ExternalLink className="ml-2 h-4" />
                                    </Button>
                                </div>
                                <div className="mt-20 flex flex-col items-center gap-4">
                                    <p className="text-center: text-muted-foreground lg:text-left">Built with open-source technologies</p>
                                    <div className="flex flex-wrap items-center justify-center gap-4">
                                        <a href="#" className={cn(buttonVariants({ variant: 'outline' }), 'group px-3')}>
                                            <img src="https://www.shadcnblocks.com/images/block/logos/shadcn-ui-small.svg" alt="company logo" className="h-6 saturate-0 transition-all group-hover:saturate-100" />
                                        </a>
                                        <a href="#" className={cn(buttonVariants({ variant: 'outline' }), 'group px-3')}>
                                            <img src="https://www.shadcnblocks.com/images/block/logos/typescript-small.svg" alt="company logo" className="h-6 saturate-0 transition-all group-hover:saturate-100" />
                                        </a>

                                        <a href="#" className={cn(buttonVariants({ variant: 'outline' }), 'group px-3')}>
                                            <img src="https://www.shadcnblocks.com/images/block/logos/react-icon.svg" alt="company logo" className="h-6 saturate-0 transition-all group-hover:saturate-100" />
                                        </a>
                                        <a href="#" className={cn(buttonVariants({ variant: 'outline' }), 'group px-3')}>
                                            <img src="https://www.shadcnblocks.com/images/block/logos/tailwind-small.svg" alt="company logo" className="h-4 saturate-0 transition-all group-hover:saturate-100" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-24">
                    <div className="container text-center">
                        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
                            <h1 className="text-3xl font-extrabold lg:text-6xl">A Collection of Components Built With Shadcn & Tailwind</h1>
                            <p className="text-balance text-muted-foreground lg:text-lg">Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.</p>
                        </div>

                        <Button size="lg" className="mt-10">
                            Discover all components
                        </Button>
                        <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
                            <span className="mx-4 inline-flex items-center -space-x-4">
                                <Avatar className="size-14 border">
                                    <AvatarImage src="https://www.shadcnblocks.com/images/block/avatar-1.webp" alt="placeholder" />
                                </Avatar>
                                <Avatar className="size-14 border">
                                    <AvatarImage src="https://www.shadcnblocks.com/images/block/avatar-2.webp" alt="placeholder" />
                                </Avatar>
                                <Avatar className="size-14 border">
                                    <AvatarImage src="https://www.shadcnblocks.com/images/block/avatar-3.webp" alt="placeholder" />
                                </Avatar>
                                <Avatar className="size-14 border">
                                    <AvatarImage src="https://www.shadcnblocks.com/images/block/avatar-4.webp" alt="placeholder" />
                                </Avatar>
                                <Avatar className="size-14 border">
                                    <AvatarImage src="https://www.shadcnblocks.com/images/block/avatar-5.webp" alt="placeholder" />
                                </Avatar>
                            </span>
                            <div>
                                <div className="flex items-center gap-1">
                                    <Star className="size-5 fill-yellow-400 text-yellow-400" />
                                    <Star className="size-5 fill-yellow-400 text-yellow-400" />
                                    <Star className="size-5 fill-yellow-400 text-yellow-400" />
                                    <Star className="size-5 fill-yellow-400 text-yellow-400" />
                                    <Star className="size-5 fill-yellow-400 text-yellow-400" />
                                    <span className="font-semibold">5.0</span>
                                </div>
                                <p className="text-left font-medium text-muted-foreground">from 200+ reviews</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* about */}
                <section className="py--32 py-12">
                    <div className="container flex flex-col gap-28">
                        <div className="flex flex-col gap-7">
                            <h1 className="text-4xl font-semibold lg:text-7xl">Bringing the power of software to everyone</h1>
                            <p className="max-w-xl text-lg">Stacker makes it easy to build customer portals, CRMs, internal tools, and other business applications for your team. In minutes, not months.</p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                            <img src="https://www.shadcnblocks.com/images/block/placeholder-1.svg" alt="placeholder" className="size-full max-h-96 rounded-2xl object-cover" />
                            <div className="flex flex-col justify-between gap-10 rounded-2xl bg-muted p-10">
                                <p className="text-sm text-muted-foreground">OUR MISSION</p>
                                <p className="text-lg font-medium">We believe that building software should be insanely easy. That everyone should have the freedom to create the tools they need, without any developers, designers or drama.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 md:gap-20">
                            <div className="max-w-xl">
                                <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">We make creating software ridiculously easy</h2>
                                <p className="text-muted-foreground">We aim to help empower 1,000,000 teams to create their own software. Here is how we plan on doing it.</p>
                            </div>
                            <div className="grid gap-10 md:grid-cols-3">
                                <div className="flex flex-col">
                                    <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                                        <Files className="size-5" />
                                    </div>
                                    <h3 className="mb-3 mt-2 text-lg font-semibold">Being radically open</h3>
                                    <p className="text-muted-foreground">We believe there’s no room for big egos and there’s always time to help each other. We strive to give and receive feedback, ideas, perspectives</p>
                                </div>
                                <div className="flex flex-col">
                                    <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                                        <CircleArrowRight className="size-5" />
                                    </div>
                                    <h3 className="mb-3 mt-2 text-lg font-semibold">Moving the needle</h3>
                                    <p className="text-muted-foreground">Boldly, bravely and with clear aims. We seek out the big opportunities and double down on the most important things to work on.</p>
                                </div>
                                <div className="flex flex-col">
                                    <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                                        <Settings className="size-5" />
                                    </div>
                                    <h3 className="mb-3 mt-2 text-lg font-semibold">Optimizing for empowerment</h3>
                                    <p className="text-muted-foreground">We believe that everyone should be empowered to do whatever they think is in the company&apos;s best interests.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-10 md:grid-cols-2">
                            <div>
                                <p className="mb-10 text-sm font-medium text-muted-foreground">JOIN OUR TEAM</p>
                                <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">We&apos;re changing how software is made</h2>
                            </div>
                            <div>
                                <img src="https://www.shadcnblocks.com/images/block/placeholder.svg" alt="placeholder" className="mb-6 max-h-36 w-full rounded-xl object-cover" />
                                <p className="text-muted-foreground">And we&apos;re looking for the right people to help us do it. If you&apos;re passionate about making change in the world, this might be the place for you</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* tech stack */}
                <section className="py--32 py-12">
                    <div className="container flex flex-col items-center text-center">
                        <h1 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">Trusted by these companies</h1>
                    </div>
                    <div className="pt-10 md:pt-16 lg:pt-20">
                        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
                            <Carousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: true })]}>
                                <CarouselContent className="ml-0">
                                    {logos.map((logo) => (
                                        <CarouselItem key={logo.id} className="basis-1/3 pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                                            <div className="mx-10 flex shrink-0 items-center justify-center">
                                                <div>
                                                    <img src={logo.image} alt={logo.description} className="h-7 w-auto" />
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
                            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
                        </div>
                    </div>
                </section>
                bento gallery
                <br />
                masonary testimonials
                {/* cta */}
                <section className="py--32 py-12">
                    <div className="container">
                        <div className="flex w-full flex-col gap-16 overflow-hidden rounded-lg bg-accent p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-16">
                            <div className="flex-1">
                                <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">Call to Action</h3>
                                <p className="text-muted-foreground lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis!</p>
                            </div>
                            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                                <Button variant="outline">Learn More</Button>
                                <Button>Get Started</Button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* footer */}
                <section className="py--32 py-12">
                    <div className="container">
                        <footer>
                            <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
                                <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
                                    <div>
                                        <span className="flex items-center justify-center gap-4 lg:justify-start">
                                            <img src="https://www.shadcnblocks.com/images/block/block-1.svg" alt="logo" className="h-11" />
                                            <p className="text-3xl font-semibold">Shadcnblocks</p>
                                        </span>
                                        <p className="mt-6 text-sm text-muted-foreground">A collection of 100+ responsive HTML templates for your startup business or side project.</p>
                                    </div>
                                    <ul className="flex items-center space-x-6 text-muted-foreground">
                                        <li className="font-medium hover:text-primary">
                                            <a href="#">
                                                <Instagram className="size-6" />
                                            </a>
                                        </li>
                                        <li className="font-medium hover:text-primary">
                                            <a href="#">
                                                <Facebook className="size-6" />
                                            </a>
                                        </li>
                                        <li className="font-medium hover:text-primary">
                                            <a href="#">
                                                <Twitter className="size-6" />
                                            </a>
                                        </li>
                                        <li className="font-medium hover:text-primary">
                                            <a href="#">
                                                <LinkedIn className="size-6" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="grid grid-cols-3 gap-6 lg:gap-20">
                                    {sections.map((section, sectionIdx) => (
                                        <div key={sectionIdx}>
                                            <h3 className="mb-6 font-bold">{section.title}</h3>
                                            <ul className="space-y-4 text-sm text-muted-foreground">
                                                {section.links.map((link, linkIdx) => (
                                                    <li key={linkIdx} className="font-medium hover:text-primary">
                                                        <a href={link.href}>{link.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
                                <p>© 2024 Shadcnblocks. All rights reserved.</p>
                                <ul className="flex justify-center gap-4 lg:justify-start">
                                    <li className="hover:text-primary">
                                        <a href="#"> Terms and Conditions</a>
                                    </li>
                                    <li className="hover:text-primary">
                                        <a href="#"> Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </footer>
                    </div>
                </section>
            </section>
        </>
    );
};

export default LandingPage;
