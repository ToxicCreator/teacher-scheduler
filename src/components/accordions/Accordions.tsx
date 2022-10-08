import {useState, useCallback} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type {AccordionChildrenType} from './type';


type AccordionBlockProps = {
  defaultState?: boolean,
  currentValue: string,
  children: AccordionChildrenType
}

function AccordionBlock(props: AccordionBlockProps) {
  const {defaultState = true, currentValue, children} = props;
  const {title, value} = children;
  const [isOpen, setOpen] = useState<boolean>(defaultState);
  const handleChange = (
    event: React.SyntheticEvent, isExpanded: boolean
  ) => {
    setOpen(isExpanded);
  };
  return (
    <Accordion 
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        borderBottom: 'gray 1px solid'
      }}
      expanded={isOpen} 
      onChange={handleChange}
    >
      <AccordionSummary
        sx={{
          p: 2.5,
          fontSize: '25px'
        }}
        expandIcon={<ExpandMoreIcon />}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails sx={{p:0}}>
        {value}
      </AccordionDetails>
    </Accordion>
  );
}


type ControlledAccordionsProps = {
  items: AccordionChildrenType[]
};

export default function ControlledAccordions(
  props: ControlledAccordionsProps
) {
  const {items} = props;
  return (
    <div>
      {items.map((item, index) => {
        const key = index.toString()
        return (
          <AccordionBlock
            key={key}
            currentValue={key}
          >
            {item}
          </AccordionBlock>
        );
      })}
    </div>
  );
}