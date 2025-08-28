import { Container, Stack, Typography, useMediaQuery } from '@mui/material';
import contact from '../assets/img/contact.png';
import tex_concad from '../assets/img/tel_contact.png';
export default function Contacts() {
  const imgsize = useMediaQuery('(max-width:552px)');
  const imgs_size = useMediaQuery('(max-width:1249px)');
  return (
    <Container maxWidth="xl">
      {!imgs_size ? (
        <Stack
          direction={'row'}
          flexWrap={'wrap'}
          justifyContent={'space-between'}
          gap={'20px'}
          sx={{
            pb: { sm: '30px', md: '40px', lg: '70px', xl: '94px' },
            pt: { sm: '20px', md: '40px', lg: '50px', xl: '64px' },
          }}
        >
          <Stack maxWidth={'625px'}>
            <Typography
              variant="h2"
              fontSize={'40px'}
              mb={'34px'}
              fontWeight={700}
            >
              Ta'lim markazlarini a'rab tili bo'yicha qidirish saytimizga xush
              kelibsiz!
            </Typography>
            <br />
            <Typography
              variant="h6"
              mb={'25px'}
              fontSize={'20px'}
              fontWeight={400}
            >
              Biz, a'rab tili va madaniyatining o'ziga xos dunyosida a'rab
              tilini o'rganishda yordam berish maqsadida tuzilganmiz. Saytimiz,
              sizning ta'lim maqsadlaringizga mos keladigan eng yaxshi ta'lim
              markazlarini topishga yordam beradigan qulay va ishonchli
              vositadir.
            </Typography>
            <br />
            <Typography
              variant="h6"
              mb={'25px'}
              fontSize={'20px'}
              fontWeight={400}
            >
              Biz, ta'lim markazlarini tanlaganda, ularning tajribasi va
              malakasi haqida ma'lumotlarni ko'rsatamiz. Bizning sayt orqali siz
              o'zingizga mos keladigan ta'lim dasturlarini va kurslarini
              topishingiz mumkin.
            </Typography>
            <br />
            <Typography
              variant="h6"
              mb={'25px'}
              fontSize={'20px'}
              fontWeight={400}
            >
              Biz bilim va o'rganishga qiziqishingizni qo'llab-quvvatlashga
              intilamiz. A'rab tili fani orqali o'z bilimingizni oshiring va
              yangi imkoniyatlarga yetishingizga imkoniyat yaratamiz. Biz
              bilimingizga bo'lgan qiziqish va istaklaringizni qondirishga
              tayyormiz. A'rab tili fani orqali o'zining o'ziga xosligini va
              ko'pmandagini his qiling.
              <br />
            </Typography>
            <Typography variant="h6" fontSize={'20px'} fontWeight={400}>
              Be strong and positive!
            </Typography>
          </Stack>
          {!imgsize ? (
            <img
              style={{
                objectFit: 'contain',
                paddingLeft: '20px',
                maxWidth: 'auto',
              }}
              src={contact}
              alt="img"
            />
          ) : (
            <img
              style={{
                objectFit: 'contain',
                paddingLeft: '20px',
                maxWidth: 'auto',
              }}
              src={tex_concad}
              alt="img"
            />
          )}
        </Stack>
      ) : (
        <Stack
          direction={'row'}
          flexWrap={'wrap'}
          justifyContent={'center'}
          gap={'20px'}
          sx={{
            pb: { sm: '30px', md: '40px', lg: '70px', xl: '94px' },
            pt: { sm: '20px', md: '40px', lg: '50px', xl: '64px' },
          }}
        >
          <Stack maxWidth={'625px'}>
            <Typography
              variant="h2"
              fontSize={'40px'}
              mb={'34px'}
              fontWeight={700}
            >
              Ta'lim markazlarini a'rab tili bo'yicha qidirish saytimizga xush
              kelibsiz!
            </Typography>
            <Typography variant="h6" fontSize={'20px'} fontWeight={400}>
              Biz, a'rab tili va madaniyatining o'ziga xos dunyosida a'rab
              tilini o'rganishda yordam berish maqsadida tuzilganmiz. Saytimiz,
              sizning ta'lim maqsadlaringizga mos keladigan eng yaxshi ta'lim
              markazlarini topishga yordam beradigan qulay va ishonchli
              vositadir.
              <br />
              <br />
            </Typography>
            <Typography variant="h6" fontSize={'20px'} fontWeight={400}>
              Biz, ta'lim markazlarini tanlaganda, ularning tajribasi va
              malakasi haqida ma'lumotlarni ko'rsatamiz. Bizning sayt orqali siz
              o'zingizga mos keladigan ta'lim dasturlarini va kurslarini
              topishingiz mumkin.
              <br />
              <br />
            </Typography>
            <Typography variant="h6" fontSize={'20px'} fontWeight={400}>
              Biz bilim va o'rganishga qiziqishingizni qo'llab-quvvatlashga
              intilamiz. A'rab tili fani orqali o'z bilimingizni oshiring va
              yangi imkoniyatlarga yetishingizga imkoniyat yaratamiz. Biz
              bilimingizga bo'lgan qiziqish va istaklaringizni qondirishga
              tayyormiz. A'rab tili fani orqali o'zining o'ziga xosligini va
              ko'pmandagini his qiling.
              <br />
            </Typography>
            <Typography variant="h6" fontSize={'20px'} fontWeight={400}>
              Be strong and positive!
            </Typography>
          </Stack>
          {!imgsize ? (
            <img
              style={{
                objectFit: 'contain',
                paddingLeft: '20px',
                maxWidth: 'auto',
              }}
              src={contact}
              alt="img"
            />
          ) : (
            <img
              style={{
                objectFit: 'contain',
                paddingLeft: '20px',
                maxWidth: 'auto',
              }}
              src={tex_concad}
              alt="img"
            />
          )}
        </Stack>
      )}
    </Container>
  );
}
