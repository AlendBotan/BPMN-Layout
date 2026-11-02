// Bundles the two libraries the page needs into one browser file.
import { layoutProcess } from 'bpmn-auto-layout';
import NavigatedViewer from 'bpmn-js/lib/NavigatedViewer';

window.BpmnTools = { layoutProcess, NavigatedViewer };
