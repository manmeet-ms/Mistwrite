import { Bell } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import moment from 'moment/moment';
import React from 'react';
import { Link } from 'react-router-dom';

const updateBullets = [
    {
        title: 'Swipe to delete',
        description: `Swipe to delete feature is available now, to prevent clutter on the main notes page I considered to implement this `,
        datePushed: '2024-11-28',
        version: '1.0.0',
    },
];

const LatestUpdatesAsPopover = ({ xlassName }) => {
    return (
        <>
            <Link to="/changelog">
                <div className="relative">
                    {/* <TipsAndUpdatesOutlined /> */}
                    <Bell className="w-5 h-5" />
                    {/* <div className="w-3 h-3 absolute top-0 -right-0.5 rounded-full bg-foreground/50 border-[3.5px] border-white dark:border-black"></div> */}
                </div>
            </Link>
            {/* <Popover  >
        <PopoverTrigger >
            <div className="relative">
                <NotificationsOutlined/>
                <div className="w-3 h-3 absolute top-0 -right-0.5 rounded-full bg-foreground/50 border-[3.5px] border-white dark:border-black"></div>
            </div>
        </PopoverTrigger>
        <PopoverContent className="relative bg-background/80 backdrop-blur-md  max-h-[50vh] right-4 overflow-auto">
                    <section className="flex flex-col  ">
                    {updateBullets.map(( points)=>(
                          <Link to="/changelog"> <div className={`flex justify-start items-start  border-${points.border ? points.border : 'b'} border-border py-2 space-x-4`}>
                          <div className="flex flex-col items-center justify-center">
                              <Today sx={{ fontSize: 28 }} className=" p-1  items-center justify-center bg-accent text-muted-foreground px-2 rounded-full" />
                              <span className="text-2xs font-medium text-muted-foreground pt-1">{moment( points.datePushed).format('DD/MM')}</span>
                          </div>
                          <div className="space-y-0.5">
                              <h4 className="text-sm font-semibold">{points.title}</h4>
                              <p className="text-xs text-muted-foreground truncate">{points.description}</p>
                             
                          </div>
                      </div></Link>
                    ))}

                    </section>
                </PopoverContent>
                        
        </Popover> */}
        </>
    );
};

const LatestUpdatesAsPage = () => {
    return (
        <>
            <section className="text-muted-foreground overflow-hidden">
                <div className="container py-2 mx-auto">
                    <div className=" divide-y-2 divide-muted">
                        {updateBullets.map((points) => (
                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="text-xs md:w-64 md:mb-0 mb-2 flex-shrink-0 flex items-center gap-2">
                                    <span className="text-xs w-min px-2  monoType   bg-muted border border-primary-foreground  py-1 rounded-full ">{points.version ? points.version : null}</span>
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="text-2xl font-extrabold text-foreground mb-2   tracking-tight">{points.title}</h2>
                                    {/* <span className="text-xs   font-semibold text-muted-foreground">{moment( points.datePushed).format('DD MMMM, YYYY')}</span> */}

                                    <div className="flex flex-col">
                                        <p>{points.description}</p>
                                        <span className="text-xs pt-2  font-semibold text-muted-foreground/40">{moment(points.datePushed).fromNow()}</span>
                                    </div>
                                    {/* <a className="text-primary inline-flex items-center mt-4">Learn More
      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    </a> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <section className="flex flex-col px-4 ">
                {updateBullets.map((key, points) => (
                    <div className="flex justify-start items-start border-b border-border py-2 space-x-4">
                        <div className="flex flex-col items-center justify-center">
                            <Today sx={{ fontSize: 28 }} className=" p-1  items-center justify-center bg-accent px-2 rounded-full" />
                            <span className="text-2xs text-muted-foreground">{points.datePushed}</span>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">{points.title}</h4>
                            <p className="text-sm text-muted-foreground">{points.description}</p>
                            <div className="flex items-center pb-2">
                                <EventOutlined sx={{ fontSize: 16 }} className="mr-1 h-4 w-4 opacity-70" /> <span className="text-xs text-muted-foreground">{points.datePushed}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section> */}
        </>
    );
};
export { LatestUpdatesAsPage, LatestUpdatesAsPopover };
