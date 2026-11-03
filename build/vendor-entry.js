// Bundles the two libraries the page needs into one browser file.
import { layoutProcess } from 'bpmn-auto-layout';
import Modeler from 'bpmn-js/lib/Modeler';

window.BpmnTools = { layoutProcess, Modeler };
