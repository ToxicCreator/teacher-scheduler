import {useState, useCallback} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


type AccordionBlockProps = {
  currentValue: string,
  value: string,
  children?: React.ReactNode,
  onChange: Function,
}

function AccordionBlock(props: AccordionBlockProps) {
  const {
    currentValue,
    value,
    children,
    onChange,
  } = props;
  return (
    <Accordion 
      expanded={currentValue === value} 
      onChange={onChange(currentValue)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        Test
      </AccordionSummary>
      <AccordionDetails sx={{p:0}}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}


type ControlledAccordionsProps = {
  items: Array<any>
};

export default function ControlledAccordions(
  props: ControlledAccordionsProps
) {
  const {items} = props;
  const [expanded, setExpanded] = useState<string>("");

  const handleChange = useCallback((panel: string) => 
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : "");
    }, []);

  return (
    <div>
      {items.map((item, index) => {
        const key = index.toString()
        return (
          <AccordionBlock
            key={key}
            currentValue={key}
            value={expanded}
            onChange={handleChange}
          >
            {item}
          </AccordionBlock>
        );
      })}
    </div>
  );
}