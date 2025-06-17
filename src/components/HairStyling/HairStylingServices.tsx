import { useState } from "react";
import { Accordion, AccordionItem as BaseAccordionItem } from "@szhsin/react-accordion";
import type { JSX, ReactNode } from "react";
import { MdArrowDropDown } from "react-icons/md";

interface IAccordionItemProps {
  header: ReactNode;
  children?: ReactNode;
  [key: string]: any; // This allows for rest props
}

// Custom accordion item component
const AccordionItem = ({ header, ...rest }: IAccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <BaseAccordionItem
      {...rest}
      header={({ state: { isEnter } }) => (
        <div className="flex items-center justify-between w-full py-4 px-4 border-b border-pink-200">
          <h3 className="text-lg font-medium text-pink-800">{header}</h3>
          <div className={`transition-transform duration-300 ${isEnter ? "rotate-180" : ""}`}>
            <MdArrowDropDown className="w-8 h-8 text-pink-500" aria-hidden="true" />
          </div>
        </div>
      )}
      className="mb-2 overflow-hidden border-b-1 border-zinc-400"
      buttonProps={{
        className: "w-full hover:bg-pink-50 transition-colors",
        onClick: () => setIsOpen(prev => !prev)
      }}
      contentProps={{
        className: "transition-height duration-300 ease-out bg-white"
      }}
      panelProps={{
        className: "p-5 text-gray-600 leading-relaxed"
      }}
    />
  )
}

const HairStylingServices = (): JSX.Element => {
  return (
    <div className="w-full lg:w-6/12 mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-8 text-pink-900" id="hair-styling-services-subtitle">
        Our Hair Styling Services
      </h2>
      
      <Accordion className="w-full" transition transitionTimeout={250}>
        <AccordionItem header="Haircuts">
          <p>
            Our expert stylists offer precision cuts tailored to your face shape and personal style. 
            From classic bobs to trendy pixies, we create looks that enhance your natural beauty.
            All haircuts include a consultation, relaxing wash, and styling.
          </p>
          <div className="mt-3 flex justify-between items-center border-t border-pink-200 pt-4">
            <span className="font-medium">Starting at</span>
            <span className="text-lg font-bold text-pink-700">$45</span>
          </div>
        </AccordionItem>
        
        <AccordionItem header="Coloring">
          <p>
            Transform your look with our premium color services. Whether you want subtle highlights, 
            balayage, ombré, or a complete color change, our specialists use high-quality products 
            that protect your hair while delivering vibrant, long-lasting results.
          </p>
          <div className="mt-3 flex justify-between items-center border-t border-pink-200 pt-4">
            <span className="font-medium">Starting at</span>
            <span className="text-lg font-bold text-pink-700">$85</span>
          </div>
        </AccordionItem>
        
        <AccordionItem header="Hair Extensions">
          <p>
            Add length, volume, or both with our professional hair extension services. 
            We offer various types including tape-in, micro-link, and sew-in extensions 
            using only the finest quality human hair that blends seamlessly with your natural locks.
          </p>
          <div className="mt-3 flex justify-between items-center border-t border-pink-200 pt-4">
            <span className="font-medium">Starting at</span>
            <span className="text-lg font-bold text-pink-700">$150</span>
          </div>
        </AccordionItem>
        
        <AccordionItem header="Special Occasions">
          <p>
            Look your absolute best for weddings, proms, galas, and other special events. 
            Our stylists create elegant updos, romantic loose curls, or sophisticated styles 
            that complement your outfit and stay perfect throughout your special day.
          </p>
          <div className="mt-3 flex justify-between items-center border-t border-pink-200 pt-4">
            <span className="font-medium">Starting at</span>
            <span className="text-lg font-bold text-pink-700">$65</span>
          </div>
        </AccordionItem>
        
        <AccordionItem header="Perms & Relaxers">
          <p>
            Change your hair texture with our professional texture services. Whether you want 
            to add curl and volume with a perm or achieve sleek, straight hair with a relaxer, 
            our technicians use formulas that minimize damage while maximizing results.
          </p>
          <div className="mt-3 flex justify-between items-center border-t border-pink-200 pt-4">
            <span className="font-medium">Starting at</span>
            <span className="text-lg font-bold text-pink-700">$95</span>
          </div>
        </AccordionItem>
        
        <AccordionItem header="Conditioning Treatments">
          <p>
            Restore health and shine to damaged hair with our deep conditioning treatments. 
            From protein-rich masks to moisturizing oils, we offer customized solutions for 
            various hair concerns including dryness, breakage, and frizz.
          </p>
          <div className="mt-3 flex justify-between items-center border-t border-pink-200 pt-4">
            <span className="font-medium">Starting at</span>
            <span className="text-lg font-bold text-pink-700">$35</span>
          </div>
        </AccordionItem>
      </Accordion>
      
      <div className="w-full mt-8 text-center flex justify-center">
        <a
          href="/contact"
          className="button-secondary min-w-full w-full sm:min-w-fit sm:w-fit text-white font-medium shadow-md"
          title="Click for booking an appointment"
          aria-label="Button for booking an appointment"
        >
          Book an Appointment
        </a>
      </div>
    </div>
  )
}

export default HairStylingServices