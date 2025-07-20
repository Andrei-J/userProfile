import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/Products',
    },
];

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

interface PageProps {
    products: Product[];
}

export default function Index() {
    const { products } = usePage().props as unknown as PageProps;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <Link href={route('products.create')}>
                <Button className="m-5">Create</Button>
            </Link>

            {products.length > 0 ? (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <div className='m-5'>
                                <Table>
                                <TableCaption>A list of your products.</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">Product Id</TableHead>
                                        <TableHead>Product Name</TableHead>
                                        <TableHead>Product Price</TableHead>
                                        <TableHead className="text-right">Product Description</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium">{product.id}</TableCell>
                                        <TableCell>{product.name}</TableCell>
                                        <TableCell>{product.price}</TableCell>
                                        <TableCell className="text-right">{product.description}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No products found.</p>
            )}
        </AppLayout>
    );
}
