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

            <div className="m-5">
                <Table>
                    <TableCaption>A list of your products.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Product Id</TableHead>
                            <TableHead>Product Name</TableHead>
                            <TableHead>Product Price</TableHead>
                            <TableHead>Product Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>{product.id}</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                    <TableCell>
                                        <Link href={route('products.edit', product.id)}>
                                            <Button className="m-5">Edit</Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <p>No products found.</p>
                        )}
                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    );
}
