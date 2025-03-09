import AboutUsBox from '../AboutUsBox/AboutUsBox'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import VaccinesIcon from '@mui/icons-material/Vaccines';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportIcon from '@mui/icons-material/Support';

export default function AboutUs() {
    return (
        <div className="mt-28 mb-28 py-16">
            <Breadcrumb  links={[
                { id: 1, title: "درباره ما", to: 'about-us' },
            ]} />
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12">
                    <AboutUsBox
                        title="داروهای خاص"
                        desc="تامین کلیه داروهای کمیاب با تضمین اصالت کالا"
                        icon={VaccinesIcon}
                    />
                    <AboutUsBox
                        title="مشاوره تلفنی"
                        desc="مشاوره رایگان با برترین داروسازان کشور ۲۴ ساعته"
                        icon={PhoneEnabledIcon}
                    />
                    <AboutUsBox
                        title="ارسال اکسپرس"
                        desc="تحویل دارو درب منزل شما حداکثر طی ۲ ساعت در تهران"
                        icon={LocalShippingIcon}
                    />
                    <AboutUsBox
                        title="پشتیبانی ویژه"
                        desc="همراهی تا بهبود کامل با نظارت تیم پزشکی متخصص"
                        icon={SupportIcon}
                    />
                </div>
            </div>
        </div>
    )
}