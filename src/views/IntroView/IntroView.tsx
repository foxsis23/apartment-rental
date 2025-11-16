import { Button } from '@/components/ui/button';
import { Home, CheckCircle, Phone } from 'lucide-react';
import { mockApartments } from '@/lib/mock/mockApartments.ts';
import { ApartmentCard } from '@/components/ApartmentCard';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

export function IntroView() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[url('https://www.archieliving.com/wp-content/uploads/2025/02/Archie-Living-One-Bedroom-Apartment-Hero-Image-01@2x-1.jpg')] bg-cover bg-center bg-no-repeat py-24 px-4 text-center"
      >
        <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">Apartment Rental</h1>
        <p className="text-xl text-white/90 mb-6 drop-shadow">
          Оренда та орендодавцям — швидко, просто, зручно
        </p>
        <Button size="lg" onClick={() => navigate('/')}>
          Подивитись квартири
        </Button>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 py-20 px-4 items-stretch"
      >
        {mockApartments.slice(0, 3).map((ap, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.4 }}
          >
            <ApartmentCard apartment={ap} />
          </motion.div>
        ))}
      </motion.section>

      <section className="max-w-5xl w-full py-20 px-4 grid md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center text-center gap-3">
          <Home className="w-10 h-10 text-orange-500" />
          <h4 className="font-semibold text-lg">Зручний пошук</h4>
          <p className="text-neutral-600 text-sm">
            Фільтри, фото, описи — знайди ідеальне житло без зайвих дзвінків.
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <CheckCircle className="w-10 h-10 text-orange-500" />
          <h4 className="font-semibold text-lg">Перевірені оголошення</h4>
          <p className="text-neutral-600 text-sm">
            Усі квартири перевірено вручну перед публікацією.
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <Phone className="w-10 h-10 text-orange-500" />
          <h4 className="font-semibold text-lg">Підтримка 24/7</h4>
          <p className="text-neutral-600 text-sm">
            Ми завжди на зв'язку для орендарів та орендодавців.
          </p>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full bg-orange-500 py-16 px-4 text-center text-white mt-10"
      >
        <h2 className="text-3xl font-bold mb-3">Є квартира для оренди?</h2>
        <p className="text-lg opacity-90 mb-6">
          Додайте оголошення за 2 хвилини — безкоштовно та без складних форм.
        </p>
        <Button
          size="lg"
          className="bg-white text-orange-600 hover:bg-neutral-100"
          onClick={() => navigate('/organizers')}
        >
          Розмістити оголошення
        </Button>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full py-20 px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-10">Поширені запитання</h2>

        <div className="space-y-6">
          {[
            {
              q: 'Скільки коштує користування сервісом?',
              a: 'Для орендарів — безкоштовно. Для орендодавців — також без комісій.',
            },
            {
              q: 'Чи перевіряєте ви оголошення?',
              a: 'Так, кожне оголошення проходить ручну модерацію.',
            },
            {
              q: 'Як швидко публікується квартира?',
              a: 'Зазвичай 5–15 хвилин після подачі.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-100 p-5 rounded-xl shadow-sm"
            >
              <h4 className="font-semibold text-lg mb-2">{item.q}</h4>
              <p className="text-neutral-600 text-sm">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full bg-neutral-900 text-neutral-300 py-10 px-4 text-center mt-20"
      >
        <h4 className="font-semibold text-lg mb-2 text-white">Apartment Rental</h4>
        <p className="text-sm">© 2025 Всі права захищені</p>
      </motion.footer>
    </div>
  );
}
