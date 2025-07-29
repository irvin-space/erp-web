import {SearchOutlined, FileTextOutlined, WalletOutlined, EditOutlined, FileSearchOutlined} from '@ant-design/icons'

const icons = {
    SearchOutlined: SearchOutlined,
    FileTextOutlined: FileTextOutlined,
    WalletOutlined: WalletOutlined,
    FileSearchOutlined: FileSearchOutlined,
}

const test2 = {
    id: 'test2',
    title: 'Cuentas por pagar',
    type: 'group',
    children : [
        {
            id: 'test2-1',
            title: 'Consulta de Efos',
            type: 'item',
            url: '/test2-1',
            icon: icons.SearchOutlined,
            breadcrum: false
        },
        {
            id: 'test2-2',
            title: 'Facturas de sevicios',
            type: 'item',
            url: '/test2-2',
            icon: icons.FileTextOutlined,
            breadcrum: false
        },
        {
            id: 'test2-3',
            title: 'Anticipos a proveedores',
            type: 'item',
            url: '/test2-3',
            icon: icons.WalletOutlined,
            breadcrum: false
        },
        {
            id: 'test2-4',
            title: 'Consulta a facturas de proveedores',
            type: 'item',
            url: '/test1-4',
            icon: icons.FileSearchOutlined,
            breadcrum: false
        }
    ]
}

export default test2;