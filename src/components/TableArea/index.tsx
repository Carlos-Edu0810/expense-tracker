import * as C from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {
    list: Item[];
}

export const TableArea = ({ list }: Props) => {
    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColunn width={100}>Data</C.TableHeadColunn>
                    <C.TableHeadColunn width={130}>Categoria</C.TableHeadColunn>
                    <C.TableHeadColunn>Título</C.TableHeadColunn>
                    <C.TableHeadColunn width={150}>Valor</C.TableHeadColunn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) =>(
                    <TableItem key={index} item={item} />
                ))}
            </tbody>
        </C.Table>
    );
}