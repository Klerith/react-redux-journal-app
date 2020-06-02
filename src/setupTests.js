import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';
import Swal from 'sweetalert2';
 
Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

const noScroll = () => {};
Object.defineProperty( window, 'scrollTo', { value: noScroll, writable: true } );




jest.mock('sweetalert2', () => ({
   fire: jest.fn(),
   close: jest.fn(),
}));