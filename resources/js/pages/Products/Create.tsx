
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create a product',
        href: '/Products/Create',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create" />
            <div className='w-8/12 p-5'>
                <form>
                    <div className='gap-5'>
                        <Label htmlFor='product name'>Name</Label>
                        <Input placeholder='Name' />
                    </div>

                   <div className='gap-5'>
                        <Label htmlFor='product name'>Price</Label>
                        <Input placeholder='Price' />
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
