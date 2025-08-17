
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Textarea } from "@/components/ui/textarea"
import { useForm } from '@inertiajs/react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from 'lucide-react';
import { OctagonAlert } from 'lucide-react';
import { Inertia } from '@inertiajs/inertia';
export default function Index() {
    const {product} = usePage().props as any;
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: `Edit product ${product.name}`,
        href: '/Products/Edit',
    },
];

 const deleteProduct = (id: number, productName: string) => {
        if (confirm(`Are you sure you want to delete ${productName} ID ${id}?`)) {
            // Call the delete function from Inertia
            Inertia.delete(route('products.delete', id));
        }
    };

    const {data, setData, put, processing, errors} = useForm({

            name: product?.name || '',
            price: product?.price || '',
            description: product?.description || '',
        })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
       put(route('products.update', product.id)); // Assuming you have an ID to update
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit" />
            <div className='w-8/12 p-5'>
                {Object.keys(errors).length > 0 && (
                    <Alert>
                    <OctagonAlert />
                    <AlertDescription>
                        <ul>
                            {Object.entries(errors).map(([key, value]) => (
                                <li key={key} className="text-red-500">
                                    {value}
                                </li>
                            ))}
                        </ul>
                    </AlertDescription>
                    </Alert>
                )}

                <form onSubmit={handleSubmit}>
                    <div className='gap-5 mb-5 '>
                        <Label htmlFor='product name'>Edit Name</Label>
                        <Input value={data.name} onChange={e => setData('name', e.target.value)} />
                    </div>

                   <div className='gap-5 mb-5 '>
                        <Label htmlFor='product name'>Edit Price</Label>
                        <Input placeholder='Price' value={data.price} onChange={e => setData('price', e.target.value)} />
                    </div>

                    <div className='gap-5 mb-5 '>
                        <Label htmlFor='product description'>Edit Description</Label>
                        <Textarea  placeholder='Description' value={data.description} onChange={e => setData('description', e.target.value)} />
                    </div>
                    <Button type='submit' className='m-5'>Update Product</Button>

                    <Button type='button' className='m-5' onClick={() => deleteProduct(product.id, product.name)}>Delete Product</Button>
                </form>
            </div>
        </AppLayout>
    );
}


