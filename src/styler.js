// switch(element) {
//   case 0: 
//     setTimeout(() => {
//       this.$refs.sp[index].$el.style.right = this.$store.getters.sliderWidth + 20 + 'px';
//       this.$refs.sp[index].$el.style.transform = 'scale(1)';
//     }, 600)
    
//     break;
//   case 1:
//     setTimeout(() => {
//       this.$refs.sp[index].$el.style.right = 0;
//     }, 600)
//     break;
//   case 2:
//     this.$refs.sp[index].$el.style.right = '-100vw';
//     this.$refs.sp[index].$el.style.opacity = '0';
//     this.$refs.sp[index].$el.style.transform = 'scale(2)';
//     break;
//   case array.length - 2:
//     this.$refs.sp[index].$el.style.right = '100vw';
//     break;
//   case array.length - 1:
//     this.$refs.sp[index].$el.style.right = this.$store.getters.sliderWidth * 2 + 40 + 'px';
//     this.$refs.sp[index].$el.style.opacity = 1
//     this.$refs.sp[index].$el.style.transform = 'scale(1)';
//     break;
// }      