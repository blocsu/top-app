import cn from 'classnames';
import { JSX } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { IReviewForm } from './ReviewForm.interface';
import styles from './ReviewForm.module.css';
import { ReviewFormProps } from './ReviewForm.props';
import CloseIcon from './close.svg';


export const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {
	const { register, control, handleSubmit } = useForm<IReviewForm>();

	const onSubmit = (data: IReviewForm) => {
		console.log(data);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)} {...props}>
				<Input {...register('name')} placeholder='Имя' />
				<Input {...register('title')} className={styles.title} placeholder='Заголовок отзыва' />
				<div className={styles.rating}>
					<span>Оценка:</span>
					<Controller 
						control={control}
						name='rating'
						render={({ field }) => (
							<Rating isEditable rating={field.value} setRating={field.onChange} />
						)}
					/>
				</div>
				<Textarea {...register('description')} className={styles.description} placeholder='Текст отзыва' />
				<div className={styles.submit}>
					<Button appearance='primary'>Отправить</Button>
					<span className={styles.info}>* Перед публикацией, отзыв пройдёт модерацию и проверку</span>
				</div>
			</div>
			<div className={styles.success}>
				<div className={styles.successTitle}>Ваш отзыв отправлен</div>
				<div>Спасибо, ваш отзыв будет опубликован после проверки</div>
				<CloseIcon className={styles.close} />
			</div>
		</form>
	);
};