const reels = [
  {
    user: "ankur_ai",
    likeCount: 1542,
    isLike: false,
    commentCount: 187,
    caption: "Late-night building my AI project.",
    video: "./reels/videoone.mp4",
    userProfile: "https://picsum.photos/id/237/300/300",
    shareCount: 42,
    isFollowed: true
  },
  {
    user: "travel_with_riya",
    likeCount: 9823,
    isLike: true,
    commentCount: 643,
    caption: "Sunset in Goa just hits different.",
    video: "./reels/video2.mp4",
    userProfile: "https://picsum.photos/id/1027/300/300",
    shareCount: 312,
    isFollowed: false
  },
  {
    user: "codecrush",
    likeCount: 4321,
    isLike: false,
    commentCount: 201,
    caption: "JS tip: Stop overengineering everything.",
    video: "./reels/videoone.mp4",
    userProfile: "https://picsum.photos/id/1005/300/300",
    shareCount: 121,
    isFollowed: true
  },
  {
    user: "fitness_rahul",
    likeCount: 7890,
    isLike: true,
    commentCount: 512,
    caption: "No excuses. Monday grind.",
    video: "./reels/video2.mp4",
    userProfile: "https://picsum.photos/id/1062/300/300",
    shareCount: 284,
    isFollowed: true
  },
  {
    user: "foodie_divya",
    likeCount: 2331,
    isLike: false,
    commentCount: 119,
    caption: "Dal Baati done right.",
    video: "./reels/videoone.mp4",
    userProfile: "https://picsum.photos/id/1084/300/300",
    shareCount: 57,
    isFollowed: false
  },
  {
    user: "gaming_arjun",
    likeCount: 15489,
    isLike: true,
    commentCount: 902,
    caption: "One shot. One kill.",
    video: "./reels/video2.mp4",
    userProfile: "https://picsum.photos/id/1074/300/300",
    shareCount: 621,
    isFollowed: false
  },
  {
    user: "tech_muskan",
    likeCount: 6754,
    isLike: false,
    commentCount: 344,
    caption: "Unboxing the new VR headset.",
    video: "./reels/videoone.mp4",
    userProfile: "https://picsum.photos/id/1011/300/300",
    shareCount: 198,
    isFollowed: true
  },
  {
    user: "artist_kabir",
    likeCount: 2841,
    isLike: true,
    commentCount: 164,
    caption: "Sketching live. No edits.",
    video: "./reels/video2.mp4",
    userProfile: "https://picsum.photos/id/1021/300/300",
    shareCount: 77,
    isFollowed: false
  },
  {
    user: "life_with_sana",
    likeCount: 945,
    isLike: false,
    commentCount: 61,
    caption: "Morning chai and peace.",
    video: "./reels/videoone.mp4",
    userProfile: "https://picsum.photos/id/1025/300/300",
    shareCount: 23,
    isFollowed: true
  },
  {
    user: "vlogger_vishal",
    likeCount: 11872,
    isLike: true,
    commentCount: 723,
    caption: "Mumbai nights are unbeatable.",
    video: "./reels/video2.mp4",
    userProfile: "https://picsum.photos/id/1035/300/300",
    shareCount: 389,
    isFollowed: false
  }
];
var allReels = document.querySelector(".all-reels");


function addData(){

var sum = "";
reels.forEach(function(elem,idx){
  sum += ` <div class="reel">
          <video autoplay loop muted src="${elem.video}"></video>
          <div class="bottom">
            <div class="user">
              <img
                src="${elem.userProfile}"
                alt="">
              <h4>${elem.user}</h4>
              <button id =${idx} class="follow">${elem.isFollowed?'unfollow':'follow'}</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>
          <div class="right">
            <div id="${idx}" class="like">
              <h4 class="like-icon">${elem.isLike?'<i class="love ri-heart-3-fill "></i>':'<i class="ri-heart-3-line "></i>'}</h4>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment">
              <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class="share">
              <h4 class="share-icon"><i class="ri-share-forward-fill"></i></h4>
              <h6>${elem.shareCount}</h6>
            </div>
             <div class="menu">
              <h4 class="menu-icon"><i class="ri-more-2-fill"></i></i></h4>
              
            </div>
          </div>

        </div>`
});
allReels.innerHTML = sum;
}
addData()

allReels.addEventListener('click',function(dets){
 
  if (dets.target.className== 'like'){
    if(!reels[dets.target.id].isLike){
      reels[dets.target.id].likeCount++;
    reels[dets.target.id].isLike = true;
    }else{
      reels[dets.target.id].likeCount--;
    reels[dets.target.id].isLike = false;

    }
  }
  if(dets.target.className =='follow')
    if(!reels[dets.target.id].isFollowed){
    reels[dets.target.id].isFollowed = true;
    }else{
      reels[dets.target.id].isFollowed = false;
    }

addData()
})