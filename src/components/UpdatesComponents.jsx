import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import moment from 'moment/moment';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BatchPredictionOutlined, Event, EventOutlined, KeyboardDoubleArrowRight, LogoDevOutlined, TipsAndUpdatesOutlined, Today, Update } from '@mui/icons-material';
import Header from './Header/Header';
import BottomToolbar from './BottomToolbar';
import { Link } from 'react-router-dom';

const updateBullets = [
    {
        title: 'Dark Mode Upgrade',
        description: 'Enjoy a sleeker and optimized dark mode experience.',
        datePushed: '2024-11-22',
        version:'0.0.0',
    },
    {
        title: 'Bug Fixes & Stability',
        description: 'Resolved issues for a smoother user experience.',
        datePushed: '2024-11-20',
        version:'0.0.0',
    },
    {
        title: 'New Widgets',
        description: 'Added customizable widgets for your homepage.',
        datePushed: '2024-11-19',
        version:'0.0.0',
        border: 'none',
    },
];

const LatestUpdatesAsPopover = () => {
return(
    <>
    <Popover>
        <PopoverTrigger>
            <div className="relative">
                {/* <TipsAndUpdatesOutlined /> */}
                <LogoDevOutlined />
                <div className="w-3 h-3 absolute top-0 -right-0.5 rounded-full bg-foreground border-[3.5px] border-white dark:border-black"></div>
            </div>
        </PopoverTrigger>
        <PopoverContent className="relative bg-background/80 backdrop-blur-md  max-h-[50vh] right-4 overflow-auto">
                    <section className="flex flex-col  ">
                    {updateBullets.map((points)=>(
                          <Link to="/changelog"> <div className={`flex justify-start items-start  border-${points.border ? points.border : 'b'} border-border py-2 space-x-4`}>
                          <div className="flex flex-col items-center justify-center">
                              <Today sx={{ fontSize: 28 }} className=" p-1  items-center justify-center bg-accent text-muted-foreground px-2 rounded-full" />
                              <span className="text-2xs font-medium text-muted-foreground">{moment( points.datePushed).format('DD/MM')}</span>
                          </div>
                          <div className="space-y-0.5">
                              <h4 className="text-xs font-semibold">{points.title}</h4>
                              <p className="text-xs text-muted-foreground">{points.description}</p>
                              {/* <div className="flex items-center pb-2">
                          <EventOutlined sx={{ fontSize: 16 }} className="mr-1 h-4 w-4 opacity-70" /> <span className="text-xs text-muted-foreground">{points.datePushed}</span>
                      </div> */}
                          </div>
                      </div></Link>
                    ))}

                    </section>
                </PopoverContent>
                        
        </Popover>
    </>
)

}


const LatestUpdatesAsPage = () => {
    return (
        <>
        <section className="text-accent-foreground/50 overflow-hidden">
  <div className="container py-6 mx-auto">
    <div className=" divide-y-2 divide-muted">

{updateBullets.map((points)=>(
  <div className="py-8 flex flex-wrap md:flex-nowrap">
  <div className="md:w-64 md:mb-0 mb-2 flex-shrink-0 flex flex-col">
    <span className="text-sm text-muted-foreground monoType ">v{points.version?points.version:null}</span>
    <span className=" monoType font-semibold text-muted-foreground">{moment( points.datePushed).format('DD MMMM, YYYY')}</span>
  </div>
  <div className="md:flex-grow">
    <h2 className="text-2xl font-extrabold text-foreground mb-2 monoType ">{points.title}</h2>
    <p className="monoType ">{points.description}</p>
    {/* <a className="text-primary inline-flex items-center mt-4">Learn More
      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    </a> */}
  </div>
</div>
)) }
    
    </div>
  </div>
</section>
            {/* <section className="flex flex-col px-4 ">
                {updateBullets.map((points) => (
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
export { LatestUpdatesAsPopover, LatestUpdatesAsPage };
