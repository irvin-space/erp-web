import {FileTextOutlined, GlobalOutlined, ContainerOutlined, EditOutlined, DollarOutlined} from '@ant-design/icons'

const icons = {
    FileTextOutlined: FileTextOutlined,
    GlobalOutlined: GlobalOutlined,
    ContainerOutlined: ContainerOutlined,
    EditOutlined: EditOutlined,
    DollarOutlined: DollarOutlined
}

const test1 = {
    id: 'test1',
    title: 'Servicios de comercio exterior',
    type: 'group',
    children : [
        {
            id: 'test1-1',
            title: 'Consulta de factura de gastos',
            type: 'item',
            url: '/test1-1',
            icon: icons.FileTextOutlined,
            breadcrum: false
        },
        {
            id: 'test1-2',
            title: 'Facturas de Tramites aduanales Web',
            type: 'item',
            url: '/test1-2',
            icon: icons.GlobalOutlined,
            breadcrum: false
        },
        {
            id: 'test1-3',
            title: 'Tramites aduanales',
            type: 'item',
            url: '/test1-3',
            icon: icons.ContainerOutlined,
            breadcrum: false
        },
        {
            id: 'test1-4',
            title: 'Modificación de tramites aduanales',
            type: 'item',
            url: '/test1-4',
            icon: icons.EditOutlined,
            breadcrum: false
        },
        {
            id: 'test1-5',
            title: 'Facturas de gastos por cuenta del cliente',
            type: 'item',
            url: '/test1-5',
            icon: icons.DollarOutlined,
            breadcrum: false
        }
    ]
}

export default test1;